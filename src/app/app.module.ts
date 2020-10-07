import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import {StockModule} from './stock/stock.module';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { StorageDemoComponent } from './storage-demo/storage-demo.component';
import {ShoppingModule} from './shopping/shopping.module';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HomeComponent,
    Page404Component,
    StorageDemoComponent,
    CommunicationComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StockModule,
    ShoppingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
