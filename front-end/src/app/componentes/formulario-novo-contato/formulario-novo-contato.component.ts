import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { AddContato } from 'state/contatos-da-agenda.actions';

@Component({
  selector: 'app-formulario-novo-contato',
  templateUrl: './formulario-novo-contato.component.html',
  styleUrls: ['./formulario-novo-contato.component.css'],
})
export class FormularioNovoContatoComponent {
  contatoNovoForm: FormGroup | undefined;

  constructor(
    public dialogRef: MatDialogRef<FormularioNovoContatoComponent>,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit() {
    this.contatoNovoForm = this.formBuilder.group({
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
  }

  salvarContato() {
    this.store.dispatch(
      new AddContato({
        contato: this.contatoNovoForm?.value,
        dialogRef: this.dialogRef,
      })
    );
  }
}
