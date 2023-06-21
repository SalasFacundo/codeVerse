import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root',
})
export class DatosService {

  private courses: Course[] = [];
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  private students: User[] = [];

  constructor(private http: HttpClient) {
    /* this.loadCourses();
    this.loadStudents(); */
  }

 /*  loadCourses() {
    this.http.get<Course[]>('http://localhost:3000/courses').subscribe((courses: any[]) => {
      this.courses = courses;
      this.coursesSubject.next(this.courses);
    });
  } */

  /* loadStudents(){
    this.http
      .get<User[]>(
        'http://localhost:3000/users'
      ).subscribe((students) => {
        this.students = students;
      });
  } */

 /*  addCourse(course: Course) {
    course.id = this.courses[this.courses.length-1].id + 1;
    this.courses.push(course);
    this.coursesSubject.next(this.courses);
  } */

  getStudentById(id: number): User | undefined {
    return this.students.find((student) => student.id === id);
  }


   modifyCourse(id: number, valor: Course) {
    let index = this.courses.findIndex(course => course.id == id);
    let oldCourse = this.courses[index];
    oldCourse.name = valor.name;
    oldCourse.capacity = valor.capacity;
    oldCourse.price = valor.price;
    oldCourse.startDate = valor.startDate;
    oldCourse.endDate = valor.endDate;
    oldCourse.startHour = valor.startHour;
    oldCourse.endHour = valor.endHour;

    this.coursesSubject.next(this.courses)
  }


  deleteCourse(courseId: number) {
    this.courses = this.courses.filter((curso) => curso.id !== courseId);
    this.coursesSubject.next(this.courses);
  }

  /* removeStudentFromCourse(courseId: number, studentId: number) {
    const courseIndex = this.courses.findIndex((course) => course.id === courseId);
    if (courseIndex !== -1) {
      const studentIndex = this.courses[courseIndex].students.findIndex(
        (student) => student === studentId
      );
      if (studentIndex !== -1) {
        this.courses[courseIndex].students.splice(studentIndex, 1);
      }
    }
    this.coursesSubject.next(this.courses)
  } */

  getStudents(): Observable<any> {

    return this.http
      .get<any[]>(
        `http://localhost:3000/users?role=student`
      );
  }

  getStudentsById(id: number): Observable<any> {
    return this.http
    .get<any[]>(
      `http://localhost:3000/users?id=${id}`
    );
  }

  getUsers(): Observable<any> {
   return this.http
      .get<User[]>(
        'http://localhost:3000/users'
      );
  }

  getCourseById(id: number): Observable<Course[]> {
    return this.coursesSubject
      .pipe(map((courses) => courses.filter((course) => course.id === id)));
  }



  /* getCoursesByStudentId(id: number): Observable<Course[]> {
    return this.coursesSubject.pipe(
      map((courses) =>
        courses.filter((course: Course) =>
          course.students.some((student) => student == id)
        )
      )
    );
  } */


  getAllCourses(): Observable<any> {
    return this.coursesSubject.asObservable();
  }
  setCourses(courses: any[]) {
    this.courses = courses;
  }

  getCourses() {
    return this.courses;
  }

  /* getCoursesByUser(user: User): Course[] {
    return this.courses.filter((course) =>
      course.students.some((student) => student === user.id)
    );
  } */

  /* getCoursesLessByUser(user: User): Observable<Course[]> {
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
  } */

  getUsersById(ids: number[]): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`).pipe(
      map((users) => {
        return users.filter((user) => ids.includes(user.id));
      })
    );
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.http
  .get<User[]>(
    `http://localhost:3000/users?id=${id}`
  )
  .pipe(
    map((users) => {
      return users.length > 0 ? users[0] : undefined;
    })
  );
  }




  /* addNewCourseToStudent(studentId: number, courseId: number) {
    this.courses[
      this.courses.findIndex((objeto) => objeto.id === courseId)
    ].students.push(studentId);
    this.coursesSubject.next(this.courses);
  } */

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
        startHour: "",
        endHour: "",
      },
    ];
  }
}
