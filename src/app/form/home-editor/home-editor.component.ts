import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Place } from 'src/app/models/place/pLace.model';






import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-home-editor',
  templateUrl: './home-editor.component.html',
  styleUrls: ['./home-editor.component.scss']
})
export class HomeEditorComponent {

  @Input() placeInput!: Place;
  place!: Place[];



  constructor(private fb: FormBuilder, private houseService: HouseService,
  ) { }


  ngOnInit(): void {
    this.showHomeEditor();

  }

  showHomeEditor() {


    return this.houseService.getConfig()
      .subscribe((data: any[]) => {
        this.place = data
      }



      );

  }


}
