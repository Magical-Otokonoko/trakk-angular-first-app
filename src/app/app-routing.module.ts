import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {StockComponent} from './stock/stock.component';
import {DetailStockComponent} from './stock/detail-stock/detail-stock.component';
import {StorageDemoComponent} from './storage-demo/storage-demo.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {CommunicationComponent} from './communication/communication.component';
import {FormulaireComponent} from './formulaires/formulaire.component';
import {ObservableDemoComponent} from './observable-demo/observable-demo.component';
import {WebApiConsumeComponent} from './web-api-consume/web-api-consume.component';
import {GolfConsumerComponent} from './web-api-consume/golf-consumer/golf-consumer.component';
import {AuthGuard} from './web-api-consume/golf-consumer/auth.guard';
import {LoginComponent} from './web-api-consume/golf-consumer/login/login.component';
import {RedirectMessageComponent} from './redirect-message/redirect-message.component';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hello',
    component: HelloWorldComponent
  },
  {
    path: 'stock',
    component: StockComponent,
    children: [
      {
        path: ':id',
        component: DetailStockComponent
      }
    ]
  },
  // {
  //   path: 'stock/:id',
  //   component: DetailStockComponent
  // },
  {
    path: 'storage',
    component: StorageDemoComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  },
  {
    path: 'formulaire',
    component: FormulaireComponent
  },
  {
    path: 'observable',
    component: ObservableDemoComponent
  },
  {
    path: 'webapi',
    component: WebApiConsumeComponent
  }, {
    path: 'golf',
    component: GolfConsumerComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'redirect-message',
    component: RedirectMessageComponent
  },
  {
    path: '**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
