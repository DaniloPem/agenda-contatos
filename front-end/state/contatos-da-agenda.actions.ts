import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContatoCadastro } from 'src/app/model/contato-cadastro';
import { DadosVisualizacaoPessoaFisica } from 'src/app/model/dados-visualizacao-pessoa-fisica';

export class GetListaContatos {
  static readonly type = '[Contatos] Get';
  constructor(
    public payload: { filtro: string; pagina: number; tamanho: number }
  ) {}
}

export class GetContato {
  static readonly type = '[Contato] Get';
  constructor(
    public payload: {
      id: number;
    }
  ) {}
}

export class AddContato {
  static readonly type = '[Contato] Post';
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
      contato: Partial<DadosVisualizacaoPessoaFisica>;
      dialogRef: MatDialogRef<any>;
    }
  ) {}
}

export class DeleteContato {
  static readonly type = '[Contato] Delete';
  constructor(
    public payload: {
      id: number;
      dialogRef: MatDialogRef<any>;
    }
  ) {}
}
