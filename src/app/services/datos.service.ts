import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { User } from '../modules/students/models/user';
import { Course } from '../modules/students/models/course';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlStudents = "./assets/data/json/students.json"
  private urlUsers = "./assets/data/json/users.json"
  private urlCourses = "./assets/data/json/courses.json"

  constructor(private http: HttpClient) {
    
   }


  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.urlUsers);
  }

  getCourseById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlCourses).pipe(
      map((courses) => courses.filter(course => course.id === id))
    );
  }
  getAllCourses(): Observable<any> {
    return this.http.get(this.urlCourses);
  }

  getCoursesByUser(user: User): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlCourses).pipe(
      map(courses => courses.filter(course => course.students.some(student => {
        if(student === user.id){
          return true;
        }
        return false;
      })))
    );
  } 

  getCoursesLessByUser(user: User): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlCourses).pipe(
      map(courses => courses.filter(course => !course.students.some(student => {
        if(student === user.id){
          return true;
        }
        return false;
      })))
    );
  } 

  getUsersById(ids:number[]): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => {
        return users.filter(user => ids.includes(user.id));
      })
    );
  }

  addNewCourseToStudent(studentId: number, courseId: number) {
    this.http.get<Course[]>(this.urlCourses).subscribe((data: Course[]) => {
      if (courseId > 0 && courseId <= data.length) {
        const course = data[courseId - 1];
        course.students.push(studentId);
        this.http.put<Course[]>(this.urlCourses, data).subscribe((value: Course[]) => {
          console.log('La ID fue agregada con éxito', value);
        });
      } else {
        console.error(`El ID del curso ${courseId} está fuera de rango.`);
      }
    }, error => {
      console.error('Error al recuperar los cursos', error);
    });
  }
  
}