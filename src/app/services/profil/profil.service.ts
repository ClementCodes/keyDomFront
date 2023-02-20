import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/profil/profil.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {


  //mes urls
  apiGetUrl: string = 'http://localhost:8000/api/user';
  apiPostUrl: string = 'http://localhost:8000/api/user/post';



  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
  };

  profil!: Profil



  getConfig(): Observable<any> {
    return this.http.get<Profil[]>(this.apiGetUrl, this.httpHeader)
  }

  postConfig(profil: Profil): Observable<Profil> {
    return this.http.post<Profil>(this.apiPostUrl, profil
    )

  }
}
