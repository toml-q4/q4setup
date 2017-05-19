import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import './rxjs-extensions';


import { ClientService } from './clients/client.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
