import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { ProfilService } from 'src/app/services/profil/profil.service';


const routes: Routes = [{ path: "", component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [

    ProfilService,


  ]
})
export class RegistrationRoutingModule { }
