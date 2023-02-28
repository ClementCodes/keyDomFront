import { Component } from '@angular/core';
import { of } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { enableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  myForm: FormGroup;
  validationCode: string | undefined;

  token!: string
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {

    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]],

    });

  }

  ngOnInit(): void {


  }

  //au log je set username et password*

  onSubmitLogin(route: string) {

    // console.log(this.myForm.value)

    sessionStorage.setItem("username", this.myForm.value.username)
    sessionStorage.setItem("password", this.myForm.value.password)

    return of(this.loginService.postLogin(this.myForm.value).subscribe(

      {
        next: ((v) => [this.router.navigate([route]), this.token = v, console.log(v), sessionStorage.setItem("token", this.token)]),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))

  }


}
