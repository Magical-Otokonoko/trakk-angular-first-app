import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockModule} from './stock/stock.module';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { StorageDemoComponent } from './storage-demo/storage-demo.component';
import {ShoppingModule} from './shopping/shopping.module';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './communication/child/child.component';
import {FormulairesModule} from './formulaires/formulaires.module';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { WebApiConsumeComponent } from './web-api-consume/web-api-consume.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MovieDBInterceptor} from './web-api-consume/movie-db.interceptor';
import { GolfConsumerComponent } from './web-api-consume/golf-consumer/golf-consumer.component';
import { LoginComponent } from './web-api-consume/golf-consumer/login/login.component';
import { RedirectMessageComponent } from './redirect-message/redirect-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HomeComponent,
    Page404Component,
    StorageDemoComponent,
    CommunicationComponent,
    ChildComponent,
    ObservableDemoComponent,
    WebApiConsumeComponent,
    GolfConsumerComponent,
    LoginComponent,
    RedirectMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulairesModule,
    FormsModule,
    StockModule,
    ShoppingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MovieDBInterceptor,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
