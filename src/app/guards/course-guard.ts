import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { DatosService } from '../services/datos.service';
import { LoginService } from '../services/loginService';

@Injectable({
  providedIn: 'root',
})
export class CourseGuard implements CanActivate {
  constructor(
    private datos: DatosService,
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot) {

    const courseId = next.params['id'];
    let url = window.location.pathname;
    if (this.datos.getCoursesByUser(this.loginService.getUser()).some((course: Course) => course.id == courseId)) {
        return true;
    } else {
        this.router.navigate(["home"]);
        return false;
    }
  }
}
