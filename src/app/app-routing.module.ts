import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {Exercice1Component} from './exercice1/exercice1.component';
import {Page404Component} from './page404/page404.component';
import {StockComponent} from './stock/stock/stock.component';
import {DetailStockComponent} from './stock/detail-stock/detail-stock.component';
import {ShoppingModule} from './shopping/shopping.module';
import {CategoryComponent} from './shopping/category/category.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {ItemDetailComponent} from './shopping/item-detail/item-detail.component';
import {CommunicationModule} from './communication/communication.module';
import {ParentComponent} from './communication/parent/parent.component';

const routes: Route[] = [{
  path: '',
  component: HomeComponent
}, {
  path: 'home',
  component: HomeComponent

}, {
  path: 'hello-world',
  component: HelloWorldComponent

}, {
  path: 'stock',
  component: StockComponent,
  children: [
    {
      path: ':id',
      component: DetailStockComponent
    }
  ]
}
  , {
    path: 'stock/:id',
    component: DetailStockComponent
  }, {
    path: 'shopping/:id',
    component: CategoryComponent,
  }, {
    path: 'shopping-list',
    component: ShoppingListComponent
  }, {
    path: 'item/:id',
    component: ItemDetailComponent
  }, {
    path: 'communication',
    component: ParentComponent
  }, {
    path: '**',
    component: Page404Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
