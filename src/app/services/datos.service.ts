import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../modules/students/models/student';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private url = "./assets/data/json/students.json"

  constructor( private http: HttpClient) { }

  
  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }
}