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

@NgModule({
  declarations: [AgendaComponent, ListaAgendaContatosComponent],
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ContatosDaAgendaState]),
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
  ],
})
export class PaginaInicialModule {}
