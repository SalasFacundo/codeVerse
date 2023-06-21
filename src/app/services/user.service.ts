import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);
  urlEndpoint: string = 'http://localhost:8080/api/users';
  body = `{
    "name": "Curso 11112226",
              "description": "Descripción del curso 1",
              "price": 99,
              "capacity": 20,
              "teacherId": 2,
              "classesId": "1, 2, 3",
              "startDate": "2023-06-09T23:00:00.000-04:00",
              "endDate": "2023-07-09T23:00:00.000-04:00",
              "startHour": "09:00:00",
              "endHour": "12:00:00"

  }`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(){
    this.httpClient.get<any>(this.urlEndpoint+'/all').subscribe(response => {
      this.usersSubject.next(response.users);
    });
  }

  getAllUsers(){
    return this.usersSubject.asObservable();
  }
}
