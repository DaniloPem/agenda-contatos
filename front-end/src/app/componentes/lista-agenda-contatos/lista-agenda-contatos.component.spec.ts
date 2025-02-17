import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendaContatosComponent } from './lista-agenda-contatos.component';

describe('ListaAgendaContatosComponent', () => {
  let component: ListaAgendaContatosComponent;
  let fixture: ComponentFixture<ListaAgendaContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgendaContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgendaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
