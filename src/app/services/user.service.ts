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
  private usersSubject = new BehaviorSubject<User[]>([]);
  urlEndpoint: string = 'http://localhost:8080/api/users';
  header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(){
    this.httpClient.get<any>(this.urlEndpoint+'/all').subscribe(response => {
      this.usersSubject.next(response.users);
    });
  }

  getUsers(role?: UserRoleEnum){
    if(role){
      return this.httpClient.get<any>(this.urlEndpoint+'/role/'+role);
    } else {
      return this.httpClient.get<any>(this.urlEndpoint+'/all');
    }
  }

  addUser(user: User){
    this.httpClient.post<any>(this.urlEndpoint+'/new', user, {headers: this.header}).subscribe(response => {
      this.loadUsers();
    });
  }

  updateUser(id: number, user: User){
    this.httpClient.put<any>(this.urlEndpoint+'/update/'+id, user, {headers: this.header}).subscribe(response => {
      this.loadUsers();
    });
  }

  deleteUser(id: number){
    this.httpClient.delete<any>(this.urlEndpoint+'/delete/'+id).subscribe(response => {
      this.loadUsers();
    });
  }

}
