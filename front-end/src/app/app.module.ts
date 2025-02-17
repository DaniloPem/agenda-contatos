import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { ListaAgendaContatosComponent } from './componentes/lista-agenda-contatos/lista-agenda-contatos.component';

@NgModule({
  declarations: [AppComponent, ListaAgendaContatosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
