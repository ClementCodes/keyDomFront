import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEditorComponent } from '../../../form/home-editor/home-editor.component';
import { HomeComponent } from '../registrationHome.component';
import { HouseService } from 'src/app/services/house/house.service';


const routes: Routes = [
  { path: "", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [

    HouseService,


  ]
})
export class HomeFormRoutingModule { }
