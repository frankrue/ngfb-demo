import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth-login-modal',
  templateUrl: './auth-login-modal.component.html',
  styleUrls: ['./auth-login-modal.component.scss']
})
export class AuthLoginModalComponent {

  public afAuth: AngularFireAuth;
  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  public signIn() {
    Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password))
      .subscribe(
        () => this.activeModal.close(),
        (error) => console.error(error)
      );
  }

}
