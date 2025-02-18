import { TestBed } from '@angular/core/testing';

import { ContatosDaAgendaService } from './contatos-da-agenda.service';

describe('ContatosDaAgendaService', () => {
  let service: ContatosDaAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosDaAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
