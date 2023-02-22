import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




import { RegistrationComponent } from './registration.component';
import { AtMyhouseComponent } from 'src/app/components/at-myhouse/at-myhouse.component';
import { RegistrationRoutingModule } from './registration-routing.module';



@NgModule({
  declarations: [
    AtMyhouseComponent,
    RegistrationComponent

  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegistrationModule { }
