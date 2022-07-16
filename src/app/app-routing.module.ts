import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoanComponent } from './component/loan/loan.component';
import { LoanDetailsComponent } from './component/loan-details/loan-details.component';
import { RecoveryComponent } from './component/recovery/recovery.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard',pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"loan", component:LoanComponent},
  {path:"loan-details", component:LoanDetailsComponent},
  {path:"recovery", component:RecoveryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
