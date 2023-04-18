import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/modules/students/models/course';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {



  @Input()
  filter: string = "";

  courses: Course[] = [];


  constructor(private datosService: DatosService,
              private user: UserLoggedService) { }

  ngOnInit(): void {

    if (this.filter == "all") {
        this.datosService.getAllCourses().subscribe(data => {
        this.courses = data;
      });
    } else if(this.filter == "related"){
      this.datosService.getCoursesByUser(this.user.getUser()).subscribe(data => {
        this.courses = data;
      });
    }
  }

}
