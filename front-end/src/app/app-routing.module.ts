import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './paginas/agenda/agenda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'agenda' },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./paginas/pagina-inicial.module').then(
        (m) => m.PaginaInicialModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
