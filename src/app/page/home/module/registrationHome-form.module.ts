import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFormRoutingModule } from './registrationHome-form-routing.module';
HomeComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../registrationHome.component';
import { HomeEditorComponent } from '../../../form/home-editor/home-editor.component';




@NgModule({
  declarations: [
    HomeComponent,
    HomeEditorComponent,



  ],
  imports: [
    CommonModule,
    HomeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  exports: [

  ]
})
export class HomeFormModule { }
