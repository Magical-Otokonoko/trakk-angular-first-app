import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CategoryComponent } from './category/category.component';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from '../app-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ShoppingListComponent, CategoryComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class ShoppingModule { }
