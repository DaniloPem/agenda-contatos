import { MatDialogRef } from '@angular/material/dialog';
import { ContatoCadastro } from 'src/app/model/contato-cadastro';

export class GetListaContatos {
  static readonly type = '[Contatos] Get';
  constructor(
    public payload: { filtro: string; pagina: number; tamanho: number }
  ) {}
}

export class AddContato {
  static readonly type = '[Contato] Add';
  constructor(
    public payload: {
      contato: Partial<ContatoCadastro>;
      dialogRef: MatDialogRef<any>;
    }
  ) {}
}

export class UpdateContato {
  static readonly type = '[Contato] Update';
  constructor(
    public payload: {
      contato: Partial<ContatoCadastro>;
      dialogRef: MatDialogRef<any>;
    }
  ) {}
}
