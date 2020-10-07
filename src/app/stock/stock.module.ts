import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {HighLightDirective} from '../directives/high-light.directive';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    StockComponent,
    HighLightDirective,
    DetailStockComponent
  ],
  exports: [
    StockComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class StockModule { }
