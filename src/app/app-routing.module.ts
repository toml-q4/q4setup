import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/clients' },
    { path: 'login', component: LoginComponent },
    { path: 'stockquotes', loadChildren: 'app/stockquotes/stockquotes.module#StockQuotesModule' },
    { path: 'version', loadChildren: 'app/version/version.module#VersionModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

export const routableComponents = [
    LoginComponent,
    LoginFormComponent,
    PageNotFoundComponent
];
