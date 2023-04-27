import { Injectable } from '@angular/core';
import { User } from '..//feature_modules//students/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  user!: User ;
  isAuthenticated: boolean = false;

  constructor() {
    if(window.localStorage['loggedUser']){
      this.isAuthenticated = true;
    }
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
