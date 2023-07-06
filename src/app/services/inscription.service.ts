import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRoleEnum } from '../enums/UserRoleEnum';
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

  create(inscription: Inscription){
    console.log("inscription")
    console.log(inscription)
    return this.httpClient.post<any>(`${this.urlEndpoint}/new`, inscription, {headers: this.header});
  }

  getUsersByCourseIdAndRole(courseId: number, role: UserRoleEnum){
    return this.httpClient.get(`${this.urlEndpoint}/studentsByCourseId/${courseId}/${role}`);
  }

  deleteUserFromInscription(studentId: number, courseId: number){
    return this.httpClient.delete(`${this.urlEndpoint}/deleteUserFromInscription/` + studentId + "/" + courseId)
  }

  getCoursesByStudentId(studentId: number){
    return this.httpClient.get(`${this.urlEndpoint}/coursesByStudentId/` + studentId );
  }

  getCoursesNotBuyed(studentId: number){
    return this.httpClient.get(`${this.urlEndpoint}/coursesNotBuyedByStudentId/` + studentId);
  }
}
