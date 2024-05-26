import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly apiUrl = 'https://localhost:7044'
  constructor(private http: HttpClient) {

   }

  getToken(value:any) : Observable<any> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.apiUrl + '/api/Auth', value, httpOptions);
  } 
}
