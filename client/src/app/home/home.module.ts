import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent} from './home.component';
import { homeRouting } from './home-routing.module'; //import our routing module

@NgModule({
    //components and pipes
  declarations: [
    HomeComponent,
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    homeRouting
  ],
  providers: [],
  exports:[HomeComponent]
})
export class HomeModule { }
