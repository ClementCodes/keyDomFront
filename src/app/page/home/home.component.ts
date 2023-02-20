import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { Place } from 'src/app/models/place/pLace.model';

import { HouseService } from 'src/app/services/house/house.service';

import * as bcrypt from 'bcrypt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private service: HouseService,) { }





  houseForm: any = new FormGroup({
    pieces: new FormControl(''),
    bathroom: new FormControl(''),
    livingRoom: new FormControl(''),
    wc: new FormControl(''),
    rooms: new FormControl(''),
    idProfil: new FormControl(''),

  });


  ngOnInit(): void {

  }




  onSubmit() {


    console.log(this.houseForm.value)
    return of(this.service.postConfig(this.houseForm.value).subscribe(

      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))
  }
}
