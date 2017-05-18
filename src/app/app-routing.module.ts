import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ClientsComponent } from './clients/clients.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'clients' },
    { path: 'login', component: LoginComponent },
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }

export const routableComponents = [
    LoginComponent,
    ClientsComponent
];