import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionRoutingModule, routableVersionComponents } from './version-routing.module';
@NgModule({
  imports: [
    CommonModule,
    VersionRoutingModule
  ],
  declarations: [routableVersionComponents]
})
export class VersionModule { }
