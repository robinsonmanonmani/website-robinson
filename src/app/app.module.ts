import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBar } from './navbar/navBar.component'
import { Intro } from './intro/intro.component'
//import { AppComponent } from './demo-page/app.component';

@NgModule({
  declarations: [
    //AppComponent
  NavBar, 
  Intro
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [NavBar, Intro]
})
export class AppModule { }
