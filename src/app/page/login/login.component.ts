import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ProfilService } from 'src/app/services/profil/profil.service';
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
  constructor(private service: LoginService, private fb: FormBuilder, private router: Router) {

    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]],

    });

  }





  ngOnInit(): void {


  }



  onSubmitLogin(route: string) {

    // console.log(this.myForm.value)


    return of(this.service.postLogin(this.myForm.value).subscribe(

      {
        next: (v) => this.router.navigate([route]),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))

  }


}
