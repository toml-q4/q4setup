import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { StockQuotesComponent } from './stockquotes.component';
import { StockQuoteListComponent } from './stockquote-list/stockquote-list.component';

const routes: Routes = [
  { path: 'stockquotes',
    component: StockQuotesComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: StockQuoteListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StockQuotesRoutingModule { }

export const routableStockQuoteComponents = [
  StockQuotesComponent,
  StockQuoteListComponent
];
