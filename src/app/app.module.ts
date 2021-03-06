import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import './rxjs-extensions';
import { ClientsModule } from './clients/clients.module';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthHttpService } from './auth-http.service';

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
    ClientsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthHttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
