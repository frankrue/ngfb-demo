import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login-rich-button',
  templateUrl: './auth-login-rich-button.component.html',
  styleUrls: ['./auth-login-rich-button.component.scss']
})
export class AuthLoginRichButtonComponent {

  @Input() public navigateTo: string[];

  constructor(
    public authService: AuthService
  ) { }

}
