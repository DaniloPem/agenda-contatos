import { PessoasFisicasPagina } from './../src/app/model/pessoas-fisicas-pagina';
import { ContatosDaAgendaService } from './../src/app/service/contatos-da-agenda.service';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AddContato,
  DeleteContato,
  GetContato,
  GetListaContatos,
  UpdateContato,
} from './contatos-da-agenda.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DadosVisualizacaoPessoaFisica } from 'src/app/model/dados-visualizacao-pessoa-fisica';
import { HttpErrorResponse } from '@angular/common/http';

export class ContatosDaAgendaStateModel {
  public paginaDeContatos!: PessoasFisicasPagina;
  public contato!: any;
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
    contato: {},
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
  static getContato(
    state: ContatosDaAgendaStateModel
  ): DadosVisualizacaoPessoaFisica {
    return state.contato;
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

  @Action(GetContato)
  getContato(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: GetContato
  ) {
    return this.contatosDaAgendaService
      .getContato(payload.id)
      .subscribe((res: DadosVisualizacaoPessoaFisica) => {
        const state = getState();
        setState({ ...state, contato: res });
      });
  }

  @Action(AddContato)
  addNovoContato(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: AddContato
  ) {
    return this.contatosDaAgendaService
      .addNovoContato(payload.contato)
      .subscribe({
        next: () => {
          this.agendaFoiAlterada(payload, 'add');
          const state = getState();
          setState({ ...state });
        },
        error: (exception) => this.mostrarExceptionErro(exception),
      });
  }

  @Action(UpdateContato)
  updateContato(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: UpdateContato
  ) {
    return this.contatosDaAgendaService
      .updateContato(payload.contato)
      .subscribe({
        next: () => {
          this.agendaFoiAlterada(payload, 'update');
          const state = getState();
          setState({ ...state });
        },
        error: (exception) => this.mostrarExceptionErro(exception),
      });
  }

  @Action(DeleteContato)
  deleteContato(
    { getState, setState }: StateContext<ContatosDaAgendaStateModel>,
    { payload }: DeleteContato
  ) {
    return this.contatosDaAgendaService.deleteContato(payload.id).subscribe({
      next: () => {
        this.agendaFoiAlterada(payload, 'delete');
        const state = getState();
        setState({ ...state });
      },
      error: (exception) => this.mostrarExceptionErro(exception),
    });
  }

  private agendaFoiAlterada(payload: any, action: string) {
    this.contatosDaAgendaService
      .getMensagemNotificacaoEmailEnviado()
      .subscribe((res) => {
        const mensagemEmail = res.mensagem;
        this.contatoSalvoComSucesso(action, mensagemEmail);
      });
    const agendaFoiAlterada = true;
    payload.dialogRef.close(agendaFoiAlterada);
  }

  private contatoSalvoComSucesso(action: string, mensagemEmail: string) {
    let mensagem: string = '';
    switch (action) {
      case 'add':
        mensagem = 'adicionado';
        break;
      case 'update':
        mensagem = 'atualizado';
        break;
      case 'delete':
        mensagem = 'apagado';
        break;
    }
    console.log(mensagem);
    this.snackbar.open(
      `Contato ${mensagem} com sucesso. ${mensagemEmail}`,
      'X',
      {
        duration: 2000,
      }
    );
  }

  private mostrarExceptionErro(exception: HttpErrorResponse) {
    const mensagem = exception.error.mensagem;

    this.snackbar.open(`ERRO: ${mensagem}`, 'X', { duration: 3000 });
  }
}
