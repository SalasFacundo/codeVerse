import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
<<<<<<< HEAD
import { map, Observable } from 'rxjs';
=======
import { Observable } from 'rxjs';
>>>>>>> serviceObser
import { Course } from '../modules/students/models/course';
import { DatosService } from '../services/datos.service';
import { UserLoggedService } from '../services/user-logged.service';

@Injectable({
  providedIn: 'root',
})
export class CourseGuard implements CanActivate {
  constructor(
    private datos: DatosService,
    private userLogged: UserLoggedService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    const courseId = next.params['id'];
    let url = window.location.pathname;
<<<<<<< HEAD
  
    return this.datos.getCoursesByUser(this.userLogged.getUser()).pipe(
      map(value => {
        if (value.some((course: Course) => course.id == courseId)) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      })
    );
=======

    if (this.datos.getCoursesByUser(this.userLogged.getUser()).some((course: Course) => course.id == courseId)) {
        return true;
    } else {
        this.router.navigate(["home"]);
        return false;
    }
>>>>>>> serviceObser
  }
}
