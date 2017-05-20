import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientsRoutingModule, routableClientComponents } from './clients-routing.module';
import { ClientService } from './client.service';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [routableClientComponents],
  providers: [ClientService]
})
export class ClientsModule { }
