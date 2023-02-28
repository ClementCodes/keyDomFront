import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [{
  path: 'homerecording', loadChildren: () => import("./page/home/module/registrationHome-form.module").then(m => m.HomeFormModule)
},
{
  path: 'userrecording', loadChildren: () => import("./page/registration/module/registration.module").then(m => m.RegistrationModule)
},
{
  path: 'login', loadChildren: () => import("./page/login/module/login.module").then(m => m.LoginModule)
},
{
  path: '**', redirectTo: 'registration'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
