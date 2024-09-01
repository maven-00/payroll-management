import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSetupComponent } from './location-setup/location-setup.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LatePolicyComponent } from './late-policy/late-policy.component';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LocationSetupComponent,
    LeaveTypeComponent,
    LatePolicyComponent,
    ChartOfAccountsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
