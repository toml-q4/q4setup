import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule, AdminRoutableComponents } from './admin-routing.module';
import { UserService } from '../user.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [ RouterModule ],
  declarations: [AdminRoutableComponents],
  providers: [ UserService ]
})
export class AdminModule { }
