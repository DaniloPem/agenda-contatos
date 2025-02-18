import { PessoasFisicasPagina } from './../src/app/model/pessoas-fisicas-pagina';
import { ContatosDaAgendaService } from './../src/app/service/contatos-da-agenda.service';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetListaContatos } from './contatos-da-agenda.actions';

export class ContatosDaAgendaStateModel {
  public paginaDeContatos!: PessoasFisicasPagina;
}

@State<ContatosDaAgendaStateModel>({
  name: 'paginaDeContatos',
  defaults: {
    paginaDeContatos: {
      pessoasFisicas: [],
      totalPaginas: 0,
      totalPessoasFisicas: 0,
    },
  },
})
@Injectable()
export class ContatosDaAgendaState {
  constructor(private contatosDaAgendaService: ContatosDaAgendaService) {}

  @Selector()
  static getListaDeContatos(state: ContatosDaAgendaStateModel) {
    return state.paginaDeContatos;
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
}
