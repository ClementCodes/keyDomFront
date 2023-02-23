import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login/Login.model';
import { UserToken } from 'src/app/models/userToken/userToken.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //mes urls
  apiLoginUrl: string = 'http://localhost:8000/api/login_check';
  userToken!: UserToken

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
  };

  body!: Login



  postLogin(login: string): Observable<any> {


    return this.http.post<Login>(this.apiLoginUrl, login
    )

  }
}
