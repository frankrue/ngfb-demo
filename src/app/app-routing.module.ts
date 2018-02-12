import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceSetListComponent } from './price-set-list/price-set-list.component';
import { CanActivateViaAuthGuard } from './shared/services/can-activate-via-auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'pricesets',
    canActivate: [CanActivateViaAuthGuard],
    component: PriceSetListComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
