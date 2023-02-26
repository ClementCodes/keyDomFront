import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../registration.component';
import { UserService } from 'src/app/services/user/user.service';



const routes: Routes = [{ path: "", component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [

    UserService,


  ]
})
export class RegistrationRoutingModule { }
