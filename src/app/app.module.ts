import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBar } from './navbar/navBar.component';
import { Intro } from './intro/intro.component';
import { MainContent } from './mainContent/mainContent.component';
//import { AppComponent } from './demo-page/app.component';

@NgModule({
  declarations: [
    //AppComponent
  NavBar, 
  Intro,
  MainContent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [NavBar, Intro, MainContent]
})
export class AppModule { }
