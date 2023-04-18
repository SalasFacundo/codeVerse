import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Student } from '../modules/students/models/student';
import { User } from '../modules/students/models/user';
import { Course } from '../modules/students/models/course';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlStudents = "./assets/data/json/students.json"
  private urlUsers = "./assets/data/json/users.json"
  private urlCourses = "./assets/data/json/courses.json"

  constructor(private http: HttpClient) { }


  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.urlUsers);
  }
  getAllCourses(): Observable<any> {
    return this.http.get(this.urlCourses);
  }

  getCoursesByUser(user: User): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlCourses).pipe(
      map(courses => courses.filter(course => course.students.some(student => {
        if(student.email === user.email){
          return true;
        }
        return false;
      })))
    );
  }

  getUsersById(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => users.filter(user => user.id === id))
    );
  }
}