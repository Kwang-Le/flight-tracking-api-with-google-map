import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/';

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
