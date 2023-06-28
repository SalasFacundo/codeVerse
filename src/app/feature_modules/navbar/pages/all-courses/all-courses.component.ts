import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd } from '@angular/router';
import { asapScheduler } from 'rxjs';
import { ModifyCourseModalComponent } from 'src/app//feature_modules//courses/components/modals/modify-course-modal/modify-course-modal.component';
import { Course } from 'src/app/models/course';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService } from 'src/app/services/loginService';
import { UpdateRouteService } from 'src/app/services/update-route.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  currentUrl = window.location.pathname;
  userLogged = this.loginService.getUser();
  userIsAdmin!: boolean;

  constructor(
    private updateRoute: UpdateRouteService,
    private courseService: CourseService,
    private loginService: LoginService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateRoute.subscribeToUrlChanges().subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
    this.userIsAdmin = this.userLogged.role == UserRoleEnum.ADMIN;
  }

  openAddCourseModal(){
    const dialog = this.matDialog.open(ModifyCourseModalComponent, {data: "add"});
    dialog.afterClosed().subscribe((valor) => {
      if (valor.action == "add") {
      this.courseService.addCourse(valor.value)
      }
      window.location.reload(); //TEMPORAL HASTA ENCONTRAR OTRA FORMA
    })
  }
}
