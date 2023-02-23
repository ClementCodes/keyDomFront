import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { Place } from 'src/app/models/place/pLace.model';

import { HouseService } from 'src/app/services/house/house.service';

import * as bcrypt from 'bcrypt';
import { UserToken } from 'src/app/models/userToken/userToken.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  username = sessionStorage.getItem("username")
  password = sessionStorage.getItem("password")


  userToken!: UserToken

  constructor(private service: HouseService, private router: Router) { }


  token!: string | null


  houseForm: any = new FormGroup({
    pieces: new FormControl('', [Validators.required, Validators.min(1)]),
    bathroom: new FormControl('', [Validators.required, Validators.min(1)]),
    livingRoom: new FormControl('', [Validators.required, Validators.min(1)]),
    wc: new FormControl('', [Validators.required, Validators.min(1)]),
    rooms: new FormControl('', [Validators.required, Validators.min(1)])

  });


  ngOnInit(): void {
    console.log("hello" + this.token?.valueOf)
    let token2 = sessionStorage.getItem("token");

    if (token2?.valueOf == undefined) {
      this.router.navigate(["login"])
    } else {
      console.log("il ya  un token ")
    }

  }




  onSubmit() {









    return of(this.service.postConfig(this.houseForm.value).subscribe(

      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))
  }
}
