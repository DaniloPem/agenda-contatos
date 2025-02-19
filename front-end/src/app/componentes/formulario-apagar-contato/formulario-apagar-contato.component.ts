import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { DeleteContato } from 'state/contatos-da-agenda.actions';

@Component({
  selector: 'app-formulario-apagar-contato',
  templateUrl: './formulario-apagar-contato.component.html',
  styleUrls: ['./formulario-apagar-contato.component.css'],
})
export class FormularioApagarContatoComponent {
  contatoId = this.contato.id;

  constructor(
    public dialogRef: MatDialogRef<FormularioApagarContatoComponent>,
    @Inject(MAT_DIALOG_DATA) public contato: any,
    private store: Store
  ) {}

  apagarContato() {
    this.store.dispatch(
      new DeleteContato({ id: this.contatoId, dialogRef: this.dialogRef })
    );
  }
}
