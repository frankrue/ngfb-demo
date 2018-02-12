import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';

import { PriceSetListComponent } from './price-set-list/price-set-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLoginModalComponent } from './shared/components/auth-login-modal/auth-login-modal.component';
import { AuthLoginRichButtonComponent } from './shared/components/auth-login-rich-button/auth-login-rich-button.component';
import { DataService } from './shared/services/data.service';
import { CanActivateViaAuthGuard } from './shared/services/can-activate-via-auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CloneModalComponent } from './shared/components/clone-modal/clone-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceSetListComponent,
    AuthLoginModalComponent,
    AuthLoginRichButtonComponent,
    DashboardComponent,
    CloneModalComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    DataService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthLoginModalComponent
  ]
})

export class AppModule {
  constructor(
    private authService: AuthService
  ) {
    this.authService.startAuth();
  }
}
