import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { AccountComponent } from './accounts/account/account.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { CustomerAccountsComponent } from './customers/customer-accounts/customer-accounts.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},

  {path: 'admin',component:AdminComponent,canActivate:[AuthenticationGuard],children:[
    {path: 'customers',component:CustomerComponent},
    {path: 'accounts',component:AccountComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path:  'new-customer',component:NewCustomerComponent},
    {path:  'customer-account/:id',component:CustomerAccountsComponent}
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
