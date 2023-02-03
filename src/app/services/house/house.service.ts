import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HomeEditorComponent } from 'src/app/form/home-editor/home-editor.component';
import { Place } from 'src/app/models/place/pLace.model';






@Injectable({
  providedIn: 'root'
})
export class HouseService {


  constructor(private http: HttpClient) { }
  apiGetUrl: string = 'http://localhost:8000/api/home/1';
  // apiPostUrl : sttring =""

  body!: Place

  getConfig(): Observable<any> {
    return this.http.get<Place[]>(this.apiGetUrl)
  }

  postConfig(): Observable<any> {

    return this.http.post<Place>(this.apiUrl, this.body)
  }


}
