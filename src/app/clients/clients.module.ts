import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientsRoutingModule, routableClientComponents } from './clients-routing.module';
import { ClientService } from './client.service';
import { LabelValueComponent } from '../shared/label-value/label-value.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [routableClientComponents, LabelValueComponent],
  providers: [ClientService]
})
export class ClientsModule { }
