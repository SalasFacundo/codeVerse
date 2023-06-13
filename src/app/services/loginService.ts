import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../feature_modules/students/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user!: User ;
  isAuthenticated: boolean = false;
  urlEndpoint: string = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient,
  ) {
    if(window.localStorage['loggedUser']){
      this.isAuthenticated = true;
    }
   }

   validateLogin(email: string, password: string): Observable<any> {
     return this.httpClient
       .get<any[]>(
         `http://localhost:8080/api/users/validLogin/${email}/${password}`
       ).pipe(
          catchError( e => {
              return throwError(e);
          })
        )
  }

  logIn(user: User): void {
    this.user = user;
    this.isAuthenticated = true;
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  logOut(): void{
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  getUser(): User {
    return JSON.parse(window.localStorage['loggedUser']);
  }
}
