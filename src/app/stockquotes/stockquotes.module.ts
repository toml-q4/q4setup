import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockQuotesRoutingModule, routableStockQuoteComponents } from './stockquotes-routing.module';
@NgModule({
  imports: [
    CommonModule,
    StockQuotesRoutingModule
  ],
  declarations: [routableStockQuoteComponents]
})
export class StockQuotesModule { }
