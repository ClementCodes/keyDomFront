import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFormModule } from './page/home/module/home-form.module';




const routes: Routes = [{
  path: 'home', loadChildren: () => import("./page/home/module/home-form.module").then(m => m.HomeFormModule)
},
// {
//   path: '', component: AppComponent
// },
{
  path: '**', redirectTo: 'home'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
