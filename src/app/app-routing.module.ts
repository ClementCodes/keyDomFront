import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [{
  path: 'home', loadChildren: () => import("./page/home/home-form.module").then(m => m.HomeFormModule)
},
{
  path: 'registration', loadChildren: () => import("./page/registration/registration.module").then(m => m.RegistrationModule)
},
{
  path: 'login', loadChildren: () => import("./page/login/login.module").then(m => m.LoginModule)
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
