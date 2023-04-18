import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/modules/students/models/course';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

}
