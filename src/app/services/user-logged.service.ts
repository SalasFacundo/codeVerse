import { Injectable } from '@angular/core';
import { User } from '../modules/students/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  user: User = {
    id: 1,
    dni: 1,
    name: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: true
  };

  constructor() { }

  setUser(user: User): void {
    this.user = user; 
  }

  getUser(): User {
    return this.user;
  }

}
