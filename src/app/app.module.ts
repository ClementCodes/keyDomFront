import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AtMyhouseComponent } from './page/at-myhouse/at-myhouse.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { Place } from './models/place/pLace.model';








@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AtMyhouseComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
