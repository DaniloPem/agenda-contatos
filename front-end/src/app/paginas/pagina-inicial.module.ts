import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { ListaAgendaContatosComponent } from 'src/app/componentes/lista-agenda-contatos/lista-agenda-contatos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';
import { NgxsModule } from '@ngxs/store';
import { ContatosDaAgendaState } from 'state/contatos-da-agenda.state';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormularioNovoContatoComponent } from '../componentes/formulario-add-update-contato/formulario-novo-contato.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormularioApagarContatoComponent } from '../componentes/formulario-apagar-contato/formulario-apagar-contato.component';
import { NgxMaskModule } from 'ngx-mask';
import { CpfPipe } from '../pipe/cpf.pipe';
import { TelefonePipe } from '../pipe/telefone.pipe';
import { CepPipe } from '../pipe/cep.pipe';

@NgModule({
  declarations: [
    AgendaComponent,
    ListaAgendaContatosComponent,
    FormularioNovoContatoComponent,
    FormularioApagarContatoComponent,
    CpfPipe,
    TelefonePipe,
    CepPipe,
  ],
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ContatosDaAgendaState]),
    NgxMaskModule.forChild(),
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { autoFocus: 'dialog', restoreFocus: true },
    },
  ],
})
export class PaginaInicialModule {}
