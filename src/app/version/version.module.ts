import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { VersionRoutingModule, routableVersionComponents } from './version-routing.module';
@NgModule({
  imports: [
    CommonModule,
    VersionRoutingModule,
    DragulaModule
  ],
  declarations: [routableVersionComponents]
})
export class VersionModule { }
