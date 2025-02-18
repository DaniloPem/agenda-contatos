import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PessoasFisicasPagina } from 'src/app/model/pessoas-fisicas-pagina';
import { GetListaContatos } from 'state/contatos-da-agenda.actions';
import { ContatosDaAgendaState } from 'state/contatos-da-agenda.state';

@Component({
  selector: 'app-lista-agenda-contatos',
  templateUrl: './lista-agenda-contatos.component.html',
  styleUrls: ['./lista-agenda-contatos.component.css'],
})
export class ListaAgendaContatosComponent {
  @Select(ContatosDaAgendaState.getListaDeContatos)
  paginaDeListaDeContatos!: Observable<PessoasFisicasPagina>;

  constructor(private store: Store) {}

  getPaginaListaDeContatos(filtro: string, pagina: number, tamanho: number) {
    this.store.dispatch(new GetListaContatos({ filtro, pagina, tamanho }));
  }
}
