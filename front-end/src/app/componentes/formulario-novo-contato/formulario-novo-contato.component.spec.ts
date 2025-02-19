import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNovoContatoComponent } from './formulario-novo-contato.component';

describe('FormularioNovoContatoComponent', () => {
  let component: FormularioNovoContatoComponent;
  let fixture: ComponentFixture<FormularioNovoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNovoContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNovoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
