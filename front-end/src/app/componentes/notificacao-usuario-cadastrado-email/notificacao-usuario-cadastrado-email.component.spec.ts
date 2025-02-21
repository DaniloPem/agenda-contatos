import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoUsuarioCadastradoEmailComponent } from './notificacao-usuario-cadastrado-email.component';

describe('NotificacaoUsuarioCadastradoEmailComponent', () => {
  let component: NotificacaoUsuarioCadastradoEmailComponent;
  let fixture: ComponentFixture<NotificacaoUsuarioCadastradoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoUsuarioCadastradoEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoUsuarioCadastradoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
