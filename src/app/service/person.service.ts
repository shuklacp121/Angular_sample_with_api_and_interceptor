import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  readonly apiUrl = 'https://localhost:7191';

  constructor(private http: HttpClient) { }

  data = ['A','B','C'];
  getPersonList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/Person')
  }

  addPerson(person: any): Observable<any> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.apiUrl + '/Person', person, httpOptions);
  } 
}
