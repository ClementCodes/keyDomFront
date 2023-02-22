import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //mes urls
  apiLoginUrl: string = 'http://localhost:8000/api/login_check';


  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
  };

  body!: Login



  postLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiLoginUrl, login
    )

  }
}
