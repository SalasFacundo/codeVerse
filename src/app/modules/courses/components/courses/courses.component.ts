import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteStudentComponent } from 'src/app/modules/students/components/modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from 'src/app/modules/students/components/modales/modal-crear-alumno/modal-crear-alumno.component';
import { Course } from 'src/app/modules/students/models/course';
import { DatosService } from 'src/app/services/datos.service';
import { UpdateRouteService } from 'src/app/services/update-route.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { BuyCourseModalComponent } from '../modals/buy-course-modal/buy-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {



  @Input()
  filter: string = "";

  dataSource: any;

  courses: Course[] = [];
  url!:string;

  constructor(private datosService: DatosService,
              private user: UserLoggedService,
              private matDialog: MatDialog,
              private updateRoute: UpdateRouteService) { }

  ngOnInit(): void {

    this.url= window.location.pathname;
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

  openFormBuyCourse(){
    const dialog = this.matDialog.open(BuyCourseModalComponent, { data: {students: this.dataSource} });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        console.log("valor")
        console.log(valor)
      }
    })
  }
}
