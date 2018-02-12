import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IUser } from '../interfaces/user';
import { AuthLoginModalComponent } from '../components/auth-login-modal/auth-login-modal.component';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public isLoggedIn = new BehaviorSubject<boolean>(false);
  public user = new BehaviorSubject<IUser>(null);

  constructor(
    public afAuth: AngularFireAuth,
    private modalService: NgbModal,
    private router: Router
  ) {}

  public startAuth() {
    this.afAuth.authState
      .subscribe(user => {
        if (user === null) {
          this.isLoggedIn.next(false);
          this.user.next(null);
        } else {
          this.isLoggedIn.next(true);
          this.user.next(user);
        }
      });
  }

  public login(navigateTo: string[]) {
    const modalRef = this.modalService.open(AuthLoginModalComponent);
    (modalRef.componentInstance as AuthLoginModalComponent).afAuth = this.afAuth;
    Observable.fromPromise(modalRef.result)
      .take(1)
      .subscribe(() => {
        this.router.navigate(navigateTo);
      });
  }

  public logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}

