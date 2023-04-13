import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../modules/students/models/student';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlStudents = "./assets/data/json/students.json"
  private urlUsers = "./assets/data/json/users.json"

  constructor( private http: HttpClient) { }

  
  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.urlUsers);
  }
}