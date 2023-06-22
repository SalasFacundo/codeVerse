import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  urlEndpoint: string = 'http://localhost:8080/api/courses';
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
    this.loadCourses();
  }

  loadCourses(){
    this.httpClient.get<any>(this.urlEndpoint+'/all').subscribe(response => {
      this.coursesSubject.next(response.courses);
    });
  }

  getAllCourses(){
    return this.coursesSubject.asObservable();
  }

  addCourse(course: Course){
    this.httpClient.post<any>(this.urlEndpoint+'/new', course, {headers: this.headers}).subscribe( response => {
      this.loadCourses();
    })
  }

  modifyCourse(id: number, course: Course){
    this.httpClient.put<any>(this.urlEndpoint+'/update/'+id, course, {headers: this.headers}).subscribe(response => {
      this.loadCourses();
    });
  }

  deleteCourse(id: number){
    this.httpClient.delete<any>(this.urlEndpoint+'/delete/'+id).subscribe(response => {
      this.loadCourses();
    });
  }
}
