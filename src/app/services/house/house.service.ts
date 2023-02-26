import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HomeEditorComponent } from 'src/app/form/home-editor/home-editor.component';
import { Place } from 'src/app/models/place/pLace.model';
import { User } from 'src/app/models/user/user.model';



@Injectable({

  providedIn: "root"
})
export class HouseService {


  //mes urls
  apiGetUrl: string = 'http://localhost:8000/api/lifeplace';
  apiPostUrl: string = 'http://localhost:8000/api/lifeplace/post';



  email = sessionStorage.getItem("username")
  password = sessionStorage.getItem("password")


  apiReceipeUrl: string = `http://localhost:8000/api/user/${this.email}/${this.password}`;


  hello = console.log(this.apiReceipeUrl)
  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
  };

  body!: Place



  getUser(): Observable<any> {
    return this.http.get<User[]>(this.apiReceipeUrl, this.httpHeader)
  }


  getConfig(): Observable<any> {
    return this.http.get<Place[]>(this.apiGetUrl, this.httpHeader)
  }

  postConfig(place: Place): Observable<Place> {
    return this.http.post<Place>(this.apiPostUrl, place
    )

  }


}
