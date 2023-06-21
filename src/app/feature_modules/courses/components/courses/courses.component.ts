import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteStudentComponent } from 'src/app//feature_modules//students/components/modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from 'src/app//feature_modules//students/components/modales/modal-crear-alumno/modal-crear-alumno.component';
import { Course } from 'src/app/models/course';
import { DatosService } from 'src/app/services/datos.service';
import { UpdateRouteService } from 'src/app/services/update-route.service';
import { LoginService } from 'src/app/services/loginService';
import { BuyCourseModalComponent } from '../modals/buy-course-modal/buy-course-modal.component';
import { DetailsCourseModalComponent } from '../modals/details-course-modal/details-course-modal/details-course-modal.component';
import { ModifyCourseModalComponent } from '../modals/modify-course-modal/modify-course-modal.component';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {



  @Input()
  filter: string = "";

  @Output()
  grillaSize = new EventEmitter<number>();

  dataSource: any;

  courses: Course[] = [];
  url!: string;
  coursesBuyed: number[] = [];
  userLogged = this.loginService.getUser();
  userIsAdmin!: boolean;

  constructor(private datosService: DatosService,
    private loginService: LoginService,
    private matDialog: MatDialog,
    private updateRoute: UpdateRouteService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
    /* this.datosService.getCoursesByStudentId(this.loginService.getUser().id).subscribe(
      data => data.forEach((e: Course) => this.coursesBuyed.push(e.id))
    ) */
    this.userIsAdmin = this.userLogged.role == UserRoleEnum.ADMIN;
  }


  openFormBuyCourse(courseId: number) {
    const dialog = this.matDialog.open(BuyCourseModalComponent, { data: { students: this.dataSource } });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
       // this.datosService.addNewCourseToStudent(this.loginService.getUser().id, courseId)
      }
    })
  }


  loadCourses() {
    this.url = window.location.pathname;
    if (this.filter == "all") {
      this.courseService.getAllCourses().subscribe(
        response => {
          this.courses = response;
          this.grillaSize.emit(this.courses.length);
        }
      )
    }
    if (this.filter == "related") {
      /* this.datosService.getCoursesByStudentId(this.loginService.getUser().id).subscribe(
        data => {
          this.courses = data;
          this.datosService.setCourses(data);
          this.grillaSize.emit(this.courses.length);
        }
      ) */
    }
  }

  isBuyed(id: number) {
    return this.coursesBuyed.some(course => course == id);
  }

  openModifyCourse(course: Course){
    const dialog = this.matDialog.open(ModifyCourseModalComponent, { data: course });
    dialog.afterClosed().subscribe((valor) => {
      if (valor.action == "modify") {
      this.courseService.modifyCourse(course.id, valor.value)
      }
    })
  }

  openDeltailsCourseModal(course: Course){
    const dialog = this.matDialog.open(DetailsCourseModalComponent, {data:course});
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {

      }
    })
  }
}
