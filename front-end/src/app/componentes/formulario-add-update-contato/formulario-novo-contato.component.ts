import { state } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DadosVisualizacaoPessoaFisica } from 'src/app/model/dados-visualizacao-pessoa-fisica';
import {
  AddContato,
  GetContato,
  UpdateContato,
} from 'state/contatos-da-agenda.actions';
import { ContatosDaAgendaState } from 'state/contatos-da-agenda.state';

@Component({
  selector: 'app-formulario-novo-contato',
  templateUrl: './formulario-novo-contato.component.html',
  styleUrls: ['./formulario-novo-contato.component.css'],
})
export class FormularioNovoContatoComponent {
  contatoForm: FormGroup | undefined;

  contatoId: number | null | undefined;

  @Select(ContatosDaAgendaState.getContato)
  contatoParaAtualizar!: Observable<DadosVisualizacaoPessoaFisica>;

  constructor(
    public dialogRef: MatDialogRef<FormularioNovoContatoComponent>,
    private formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public contatoSelecionado: any
  ) {}

  ngOnInit() {
    this.contatoId = this.contatoSelecionado?.id;
    if (!this.contatoId) {
      this.contatoForm = this.formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        cpf: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        telefone: [null, Validators.required],
        endereco: this.formBuilder.group({
          cep: [null, Validators.required],
          logradouro: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required],
        }),
      });
    } else {
      this.store.dispatch(new GetContato({ id: this.contatoId }));
      this.contatoParaAtualizar.subscribe(
        (contato: DadosVisualizacaoPessoaFisica) => {
          this.contatoForm = this.formBuilder.group({
            id: [contato.id],
            nome: [contato.nome, Validators.required],
            cpf: [contato.cpf, Validators.required],
            email: [contato.email, [Validators.required, Validators.email]],
            telefone: [contato.telefone, Validators.required],
            endereco: this.formBuilder.group({
              cep: [contato.enderecoCep, Validators.required],
              logradouro: [contato.enderecoLogradouro, Validators.required],
              numero: [contato.enderecoNumero, Validators.required],
              complemento: [contato.enderecoComplemento],
              bairro: [contato.enderecoBairro, Validators.required],
              cidade: [contato.enderecoCidade, Validators.required],
              estado: [contato.enderecoEstado, Validators.required],
            }),
          });
        }
      );
    }
  }

  adicionarNovoContato() {
    this.store.dispatch(
      new AddContato({
        contato: this.contatoForm?.value,
        dialogRef: this.dialogRef,
      })
    );
  }

  editarContato() {
    this.store.dispatch(
      new UpdateContato({
        contato: this.contatoForm?.value,
        dialogRef: this.dialogRef,
      })
    );
  }
}
