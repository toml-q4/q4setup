import { NgModule } from '@angular/core';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientInfoComponent } from './client-info/client-info.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'clients' },
    { path: 'clients', component: ClientListComponent },
    { path: 'clients/:id', component: ClientInfoComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    ClientListComponent,
    ClientInfoComponent
];