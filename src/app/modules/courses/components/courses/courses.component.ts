import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/modules/students/models/course';
import { DatosService } from 'src/app/services/datos.service';
import { UpdateRouteService } from 'src/app/services/update-route.service';
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
              private user: UserLoggedService,
              private router: Router,
              private updateRoute: UpdateRouteService) { }

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

  direccionar(){
    console.log("entra a redireccionar")
    this.router.navigate(['/home/courseDetail'], { replaceUrl: true });
  }
}
