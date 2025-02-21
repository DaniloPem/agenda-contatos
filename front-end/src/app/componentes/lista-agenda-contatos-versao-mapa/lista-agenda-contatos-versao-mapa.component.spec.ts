import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendaContatosVersaoMapaComponent } from './lista-agenda-contatos-versao-mapa.component';

describe('ListaAgendaContatosVersaoMapaComponent', () => {
  let component: ListaAgendaContatosVersaoMapaComponent;
  let fixture: ComponentFixture<ListaAgendaContatosVersaoMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgendaContatosVersaoMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgendaContatosVersaoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
