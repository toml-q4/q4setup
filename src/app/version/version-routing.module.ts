import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { VersionComponent } from './version.component';

const routes: Routes = [
  { path: '',
    component: VersionComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VersionRoutingModule { }

export const routableVersionComponents = [
  VersionComponent
];
