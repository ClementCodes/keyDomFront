import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';



import { JwtModule } from "@auth0/angular-jwt";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200/registration", "http://localhost:4200/home"],
        disallowedRoutes: ["http://localhost:4200/test"],
      },
    }),






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
