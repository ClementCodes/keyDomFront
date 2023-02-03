import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor() { }
  titre = "salut"
  name = new FormControl('');
  name2 = new FormControl('hello')
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testClem();
  }



  testClem(): any {

    if (this.name == this.name2) {

      return this.titre = "mauvais titre"
    };
  }



}
