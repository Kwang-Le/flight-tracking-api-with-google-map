import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://sinno.soict.ai:37080/course'

  getCourse(course: any): Observable<any>{
    // let params = new HttpParams();
    // params = params.append("id", course);
    // console.log(params);
    return this.http.get<any>('https://api.spacexdata.com/v3/payloads', {params: {nationality: 'Canada'}});
  }

}
