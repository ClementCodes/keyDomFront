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
    pieces: new FormControl('', [Validators.required, Validators.min(1)]),
    bathroom: new FormControl('', [Validators.required, Validators.min(1)]),
    livingRoom: new FormControl('', [Validators.required, Validators.min(1)]),
    wc: new FormControl('', [Validators.required, Validators.min(1)]),
    rooms: new FormControl('', [Validators.required, Validators.min(1)])

  });


  ngOnInit(): void {

  }




  onSubmit() {


    console.log(localStorage.getItem)
    return of(this.service.postConfig(this.houseForm.value).subscribe(

      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))
  }
}
