import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  urlEndpoint: string = 'http://localhost:8080/api/clases';
  header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
              private httpClient: HttpClient
  ) { }

  getClasesByCourseId(id: number){
    return this.httpClient.get(this.urlEndpoint+'/courseId/'+id);
  }
}
