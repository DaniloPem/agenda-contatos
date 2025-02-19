import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { debounceTime, Observable } from 'rxjs';
import { DadosVisualizacaoPessoaFisica } from 'src/app/model/dados-visualizacao-pessoa-fisica';
import { PessoasFisicasPagina } from 'src/app/model/pessoas-fisicas-pagina';
import { GetListaContatos } from 'state/contatos-da-agenda.actions';
import { ContatosDaAgendaState } from 'state/contatos-da-agenda.state';
import { FormularioNovoContatoComponent } from '../formulario-add-update-contato/formulario-novo-contato.component';

@Component({
  selector: 'app-lista-agenda-contatos',
  templateUrl: './lista-agenda-contatos.component.html',
  styleUrls: ['./lista-agenda-contatos.component.css'],
})
export class ListaAgendaContatosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nome',
    'cpf',
    'email',
    'telefone',
    'cep',
    'endereco',
    'complemento',
    'bairro',
    'cidade',
    'estado',
    'actions',
  ];

  dataSource!: MatTableDataSource<DadosVisualizacaoPessoaFisica>;

  filtroListaDeContatosControl = new FormControl();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex: number = 0;
  pageSize: number = 30;
  numeroDeContatosNaPagina!: number;

  @Select(ContatosDaAgendaState.getListaDeContatos)
  paginaDeListaDeContatos!: Observable<PessoasFisicasPagina>;

  constructor(private store: Store, private matDialog: MatDialog) {
    this.iniciarValuesChangesFiltro();
  }

  ngAfterViewInit(): void {
    this.carregarPaginaComListaDeContatos();
  }

  iniciarValuesChangesFiltro() {
    this.filtroListaDeContatosControl.valueChanges
      .pipe(debounceTime(1500))
      .subscribe(() => {
        this.carregarPaginaComListaDeContatos();
        this.pageIndex = this.paginator.pageIndex;
        this.pageSize = this.paginator.pageSize;
      });
  }

  carregarPaginaComListaDeContatos() {
    const filtro = this.filtroListaDeContatosControl.value ?? '';
    const pagina = this.paginator.pageIndex ?? 0;
    const tamanho = this.paginator.pageSize ?? 30;
    this.store.dispatch(new GetListaContatos({ filtro, pagina, tamanho }));
  }

  openDialogAddNovoContato() {
    this.matDialog
      .open(FormularioNovoContatoComponent, {
        width: '50%',
      })
      .afterClosed()
      .subscribe((contatoFoiAdicionado) => {
        if (contatoFoiAdicionado) {
          this.carregarPaginaComListaDeContatos();
        }
      });
  }

  openDialogUpdateContato(contato: any) {
    this.matDialog
      .open(FormularioNovoContatoComponent, {
        data: contato,
        width: '50%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.carregarPaginaComListaDeContatos();
        }
      });
  }
}
