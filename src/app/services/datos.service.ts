import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { User } from '../modules/students/models/user';
import { Course } from '../modules/students/models/course';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private urlStudents = './assets/data/json/students.json';
  private urlUsers = './assets/data/json/users.json';
  private urlCourses = './assets/data/json/courses.json';

  private courses: Course[] = [];
  private coursesSubject = new BehaviorSubject<Course[]>(this.defaultCourse());

  constructor(private http: HttpClient) {
    this.loadCourses();
  }

  loadCourses() {
    this.http.get<Course[]>(this.urlCourses).subscribe((courses) => {
      this.courses = courses;
      this.coursesSubject.next(this.courses);
    });
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.coursesSubject.next(this.courses);
  }

  deleteCourse(courseId: number) {
    this.courses = this.courses.filter((curso) => curso.id !== courseId);
    this.coursesSubject.next(this.courses);
  }

  removeStudentFromCourse(courseId: number, studentId: number) {
    const courseIndex = this.courses.findIndex((course) => course.id === courseId);
    if (courseIndex !== -1) {
      const studentIndex = this.courses[courseIndex].students.findIndex(
        (student) => student === studentId
      );
      if (studentIndex !== -1) {
        this.courses[courseIndex].students.splice(studentIndex, 1);
      }
    }
  }

  getCoursesByStudentId(id: number): Observable<Course[]> {
    return this.coursesSubject.pipe(
      map((courses) =>
        courses.filter((course: Course) =>
          course.students.some((student) => student == id)
        )
      )
    );
  }

  getStudents(): Observable<any> {
    return this.http.get(this.urlUsers);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.urlUsers);
  }

  getCourseById(id: number): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.urlCourses)
      .pipe(map((courses) => courses.filter((course) => course.id === id)));
  }
  getAllCourses(): Observable<any> {
    return this.coursesSubject.asObservable();
  }
  setCourses(courses: any[]) {
    this.courses = courses;
  }

  getCourses() {
    return this.courses;
  }

  getCoursesByUser(user: User): Course[] {
    return this.courses.filter((course) =>
      course.students.some((student) => student === user.id)
    );
  }

  getCoursesLessByUser(user: User): Observable<Course[]> {
    return this.coursesSubject.pipe(
      map((courses) =>
        courses.filter(
          (course) =>
            !course.students.some((student) => {
              if (student === user.id) {
                return true;
              }
              return false;
            })
        )
      )
    );
  }

  getUsersById(ids: number[]): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => {
        return users.filter((user) => ids.includes(user.id));
      })
    );
  }

  addNewCourseToStudent(studentId: number, courseId: number) {
    this.courses[
      this.courses.findIndex((objeto) => objeto.id === courseId)
    ].students.push(studentId);
    this.coursesSubject.next(this.courses);
  }

  defaultCourse() {
    return [
      {
        id: 0,
        name: '',
        capacity: 0,
        teachers: [],
        students: [],
        classes: [],
        price: 0,
        startDate: new Date(),
        endDate: new Date(),
      },
    ];
  }
}
