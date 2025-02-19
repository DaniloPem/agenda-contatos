import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioApagarContatoComponent } from './formulario-apagar-contato.component';

describe('FormularioApagarContatoComponent', () => {
  let component: FormularioApagarContatoComponent;
  let fixture: ComponentFixture<FormularioApagarContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioApagarContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioApagarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
