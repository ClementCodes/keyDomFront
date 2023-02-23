import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ProfilService } from 'src/app/services/profil/profil.service';
import * as bcrypt from 'bcryptjs';
import { enableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  myForm: FormGroup;
  validationCode: string | undefined;
  constructor(private service: ProfilService, private fb: FormBuilder, private router: Router) {

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



    // let salt = bcrypt.genSaltSync(10);
    // let pass = bcrypt.hashSync(this.myForm.value.password, salt);


    // this.myForm.value.password = pass
    // console.log(pass)
    this.router.navigate([route])
    return of(this.service.postConfig(this.myForm.value).subscribe(

      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }


    ))

  }





}
