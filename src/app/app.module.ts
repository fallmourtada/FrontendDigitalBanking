import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { CustomerComponent } from './customers/customer/customer.component';
import { AccountComponent } from './accounts/account/account.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { HTTP_INTERCEPTORS ,HttpClientModule} from '@angular/common/http';
import { AppInterceptor } from './interceptors/app.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { CustomerAccountsComponent } from './customers/customer-accounts/customer-accounts.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    AccountComponent,
    DashboardComponent,
    LoginComponent,
    NewCustomerComponent,
    CustomerAccountsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatTableModule,
    MatSelectModule,
   MatRadioModule,
   MatSnackBarModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
