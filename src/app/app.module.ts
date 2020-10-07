import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import { Exercice1Component } from './exercice1/exercice1.component';
import {StockModule} from './stock/stock.module';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Exercice1Component,
    HomeComponent,
    Page404Component,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
