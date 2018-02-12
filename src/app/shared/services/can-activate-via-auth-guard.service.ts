import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { FirebaseAuth } from '@firebase/auth-types';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.afAuth.authState
      .take(1)
      .map(authState => !!authState);
  }

}
