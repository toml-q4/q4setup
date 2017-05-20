import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: 'clients',
    component: ClientsComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: ClientListComponent },
      { path: ':id', component: ClientComponent }
    ]  
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

export const routableClientComponents = [
  ClientsComponent,
  ClientListComponent,
  ClientComponent
];
