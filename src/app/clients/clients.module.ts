import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ClientsRoutingModule, routableClientComponents } from './clients-routing.module';
import { ClientService } from './client.service';
import { LinkifyPipe } from './linkify.pipe';
import { UsernamePipe } from './username.pipe';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [routableClientComponents, LinkifyPipe, UsernamePipe],
  providers: [ClientService]
})
export class ClientsModule { }
