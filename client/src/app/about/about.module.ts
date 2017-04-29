import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AboutComponent} from './about.component';
import { aboutRouting } from './about-routing.module'; //import our routing module

@NgModule({
    //components and pipes
  declarations: [
    AboutComponent,
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    aboutRouting
  ],
  providers: [],
  exports:[AboutComponent]
})
export class AboutModule { }
