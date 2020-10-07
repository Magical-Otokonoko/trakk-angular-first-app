import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import {MatTableModule} from '@angular/material/table';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [StockComponent, DetailStockComponent],
  exports: [
    StockComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule
  ]
})
export class StockModule { }
