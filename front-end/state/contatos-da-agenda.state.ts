import { PessoasFisicasPagina } from './../src/app/model/pessoas-fisicas-pagina';
import { ContatosDaAgendaService } from './../src/app/service/contatos-da-agenda.service';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddContato, GetListaContatos } from './contatos-da-agenda.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

export class ContatosDaAgendaStateModel {
  public paginaDeContatos!: PessoasFisicasPagina;
  public contatoAdicionado!: boolean;
}

@State<ContatosDaAgendaStateModel>({
  name: 'paginaDeContatos',
  defaults: {
    paginaDeContatos: {
      pessoasFisicas: [],
      totalPaginas: 0,
      totalPessoasFisicas: 0,
    },
    contatoAdicionado: false,
  },
})
@Injectable()
export class ContatosDaAgendaState {
  constructor(
    private contatosDaAgendaService: ContatosDaAgendaService,
    private snackbar: MatSnackBar
  ) {}

  @Selector()
  static getListaDeContatos(
    state: ContatosDaAgendaStateModel
  ): PessoasFisicasPagina {
    return state.paginaDeContatos;
  }

  @Selector()
  static addNovoContato(state: ContatosDaAgendaStateModel): boolean {
    return state.contatoAdicionado;
  }

  @Action(GetListaContatos)
  getPaginaListaDeContatos(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: GetListaContatos
  ) {
    return this.contatosDaAgendaService
      .getListaDeContatos(payload.filtro, payload.pagina, payload.tamanho)
      .subscribe((res: PessoasFisicasPagina) => {
        const state = getState();
        setState({ ...state, paginaDeContatos: res });
      });
  }

  @Action(AddContato)
  addNovoContato(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: AddContato
  ) {
    return this.contatosDaAgendaService
      .addNovoContato(payload.contato)
      .subscribe(() => {
        this.contatoSalvoComSucesso();
        const contatoFoiCriado = true;
        payload.dialogRef.close(contatoFoiCriado);
        const state = getState();
        setState({ ...state });
      });
  }

  private contatoSalvoComSucesso() {
    this.snackbar.open('Contato adicionado com sucesso.', '', {
      duration: 2000,
    });
  }
}
