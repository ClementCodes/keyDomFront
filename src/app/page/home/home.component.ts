import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { Place } from 'src/app/models/place/pLace.model';

import { HouseService } from 'src/app/services/house/house.service';

import * as bcrypt from 'bcrypt';
import { UserToken } from 'src/app/models/userToken/userToken.model';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  username = sessionStorage.getItem("username")
  password = sessionStorage.getItem("password")
  receipeId!: number;
  user: Observable<User[]> | any
  userToken!: UserToken
  userVide: User | any
  place: Observable<Place[]> | any
  token!: string | null
  constructor(private userService: UserService, private service: HouseService, private router: Router, private houseService: HouseService) { }


  houseForm: any = new FormGroup({
    pieces: new FormControl('', [Validators.required, Validators.min(1)]),
    bathroom: new FormControl('', [Validators.required, Validators.min(1)]),
    livingRoom: new FormControl('', [Validators.required, Validators.min(1)]),
    wc: new FormControl('', [Validators.required, Validators.min(1)]),
    rooms: new FormControl('', [Validators.required, Validators.min(1)])

  });

  ngOnInit(): void {

    let token2 = sessionStorage.getItem("token");

    if (token2?.valueOf == undefined) {
      this.router.navigate(["login"])
    } else {
      console.log("il ya  un token ")
    }
    this.receipe()
    this.insert()

  }

  //ili a l'initialisation je recupere le l 'id de l'utilisateur' qui vient de se loguuer
  receipe() {

    this.houseService.getUser().subscribe({
      next: (v) => [this.user = v[0], console.log(" recipe idUser :", this.user.id), sessionStorage.setItem("idUser", this.user.id)],
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

    console.log("sessions storage  IDUser " + sessionStorage.getItem("idUser")
    )


  }


  //au moment ou je soumet le formulaire je definit le session storage de l'idPlace
  onSubmit(route: string) {



    return of(this.service.postConfig(this.houseForm.value).subscribe(
      {
        next: (v) => [this.place = v, console.log(this.place.id), sessionStorage.setItem("idPlace", this.place.id), console.log(this.place.id
        ), console.log("le clg", this.place.id), this.router.navigate([route])],
        error: (e) => console.error(e),
        complete: () => [console.info('complete')]
      }
    ))

  }


  //ici je fait la requete qui permet d'inserer lid lifePlace au moment ou l'utilisateur dse loggue
  insert() {
    this.userService.insertUser().subscribe({
      next: (v) => [this.user.id = v[0], console.log("idUser :", this.user.id)],
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })




  }

}
