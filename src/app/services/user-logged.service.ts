import { Injectable } from '@angular/core';
import { User } from '../modules/students/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  user!: User ;
  isAuthenticated: boolean = false;

  constructor() { }

  setUser(user: User): void {
    this.user = user; 
  }

  getUser(): User {
    return this.user;
  }

}
