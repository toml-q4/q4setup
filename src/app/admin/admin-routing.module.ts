import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { LoginComponent } from './login/login.component';

import { UserService } from '../user.service';

const routes: Routes = [
  { path: 'admin', 
  component: AdminComponent, 
  children: [
    {
      path: '', component: AdminMenuComponent, canActivate: [UserService]
    },
    {
      path: 'login', component: LoginComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const AdminRoutableComponents = [
  AdminComponent,
  AdminMenuComponent,
  LoginComponent
];