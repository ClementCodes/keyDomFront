import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeFormRoutingModule } from '../home/home-form-routing.module';

import { AtMyhouseComponent } from 'src/app/components/at-myhouse/at-myhouse.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    AtMyhouseComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HomeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
