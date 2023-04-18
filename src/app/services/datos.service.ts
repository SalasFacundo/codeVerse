import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Student } from '../modules/students/models/student';
import { User } from '../modules/students/models/user';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlStudents = "./assets/data/json/students.json"
  private urlUsers = "./assets/data/json/users.json"
  private urlCourses = "./assets/data/json/courses.json"

  constructor( private http: HttpClient) { }

  
  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.urlUsers);
  }
  getCourses(): Observable<any> {
    return this.http.get(this.urlCourses);
  }
  getUsersById(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => users.filter(user => user.id === id))
    );
  }
  getCoursesByUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => users.filter(user => user.id === id))
    );
  }
}