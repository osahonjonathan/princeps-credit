import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoanComponent } from './component/loan/loan.component';
import { LoanDetailsComponent } from './component/loan-details/loan-details.component';
import { RecoveryComponent } from './component/recovery/recovery.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';

import { HeaderComponent } from './component/header/header.component';
import { LoanDisbursementComponent } from './component/loan-disbursement/loan-disbursement.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoanComponent,
    LoanDetailsComponent,
    RecoveryComponent,
    SideNavComponent,
   
    HeaderComponent,
        LoanDisbursementComponent,
        TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
