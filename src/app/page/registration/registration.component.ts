import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import * as bcrypt from 'bcryptjs';
import { enableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  username !: string
  userpassword !: string




  user: Observable<User[]> | any

  token!: string


  receipeId!: number;
  myForm: FormGroup;
  validationCode: string | undefined;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private loginService: LoginService,) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(1)]],
      firstName: ['', [Validators.required, Validators.min(1)]],
      zipCode: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.min(1)]],
      street: ['', [Validators.required, Validators.min(1)]],
    });





  }





  ngOnInit(): void {


  }



  onSubmit(route: string) {



    //  ici je créer un token pour l'enregistrement
    sessionStorage.setItem("username", this.myForm.value.name)
    sessionStorage.setItem("password", this.myForm.value.password)



    // this.myForm.value.password = pass
    // console.log(pass)
    this.router.navigate([route])
    return of(this.userService.postConfig(this.myForm.value).subscribe(

      {
        next: (v) => [this.user = v, console.log(this.user.id), sessionStorage.setItem("idUserRec", this.user.id), console.log("sessionsiduserrec", sessionStorage.getItem("idUserRec"))],
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))

  }





}
