import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginModalComponent } from './auth-login-modal.component';

describe('AuthLoginModalComponent', () => {
  let component: AuthLoginModalComponent;
  let fixture: ComponentFixture<AuthLoginModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
