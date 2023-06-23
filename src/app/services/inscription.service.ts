import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  inscription: Inscription[] = [];
  urlEndpoint: string = 'http://localhost:8080/api/inscriptions';
  header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
              private httpClient: HttpClient
  ) { }

  getStudentsByCourseId(courseId: number){
    return this.httpClient.get(`${this.urlEndpoint}/studentsByCourseId/` + courseId);
  }

  deleteUserFromInscription(studentId: number, courseId: number){
    return this.httpClient.delete(`${this.urlEndpoint}/deleteUserFromInscription/` + studentId + "/" + courseId)
  }

}
