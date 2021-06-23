import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Starship } from '../starships';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'https://swapi.dev/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
//   AddStudent(data: Spaceship): Observable<any> {
//     let API_URL = `${this.endpoint}/add-student`;
//     return this.http.post(API_URL, data)
//       .pipe(
//         catchError(this.errorMgmt)
//       )
//   }

  // Get all starships
  GetStarships() {
    return this.http.get(`${this.endpoint}starships/`);
  }

  GetPilot() {
    return this.http.get(`${this.endpoint}people/1/`);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}