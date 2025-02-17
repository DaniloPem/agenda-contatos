import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { ListaAgendaContatosComponent } from 'src/app/componentes/lista-agenda-contatos/lista-agenda-contatos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';

@NgModule({
  declarations: [AgendaComponent, ListaAgendaContatosComponent],
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    MatButtonModule,
    MatSidenavModule,
  ],
})
export class PaginaInicialModule {}
