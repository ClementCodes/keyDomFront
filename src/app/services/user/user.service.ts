import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  //mes urls
  apiGetUrl: string = 'http://localhost:8000/api/user';
  apiPostUrl: string = 'http://localhost:8000/api/user/registration';


  idUser = sessionStorage.getItem("idUserRec")
  idPlace = sessionStorage.getItem("idPlace")

  apiLifeInUserUrl: string = `https://localhost:8000/api/user/edit/${this.idUser}/${this.idPlace}`;

  // apitest = " https://localhost:8000/api/user/edit/141/346";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
  };

  user!: User



  getConfig(): Observable<any> {
    return this.http.get<User[]>(this.apiGetUrl, this.httpHeader)
  }

  postConfig(user: User): Observable<User> {
    return this.http.post<User>(this.apiPostUrl, user
    )

  }


  insertUser(): Observable<any> {
    return this.http.get<User[]>(this.apiLifeInUserUrl, this.httpHeader
    )

  }
}
