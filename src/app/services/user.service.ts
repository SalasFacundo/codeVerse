import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRoleEnum } from '../enums/UserRoleEnum';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  urlEndpoint: string = 'http://localhost:8080/api/users';
  header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private httpClient: HttpClient) {
  }

  getUsers(role?: UserRoleEnum){
    if(role){
      return this.httpClient.get<any>(this.urlEndpoint+'/role/'+role);
    } else {
      return this.httpClient.get<any>(this.urlEndpoint+'/all');
    }
  }

  addUser(user: User){
    return this.httpClient.post<any>(this.urlEndpoint+'/new', user, {headers: this.header})
  }

  updateUser(id: number, user: User){
    return this.httpClient.put<any>(this.urlEndpoint+'/update/'+id, user, {headers: this.header})
  }

  deleteUser(id: number){
    return this.httpClient.delete<any>(this.urlEndpoint+'/delete/'+id)
  }

}
