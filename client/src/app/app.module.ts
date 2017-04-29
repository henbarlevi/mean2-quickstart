import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouting } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
@NgModule({
  //Components and pipes
  declarations: [
    AppComponent
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //order of routing modules matters : https://angular.io/docs/ts/latest/guide/router.html#!#routing-module-order
    HomeModule,
    AboutModule,
    appRouting

  ],
  //Services and Guards
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
