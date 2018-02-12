import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginRichButtonComponent } from './auth-login-rich-button.component';

describe('AuthLoginRichButtonComponent', () => {
  let component: AuthLoginRichButtonComponent;
  let fixture: ComponentFixture<AuthLoginRichButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginRichButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginRichButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
