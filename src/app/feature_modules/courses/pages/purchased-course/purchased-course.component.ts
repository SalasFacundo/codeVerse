import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { DatosService } from 'src/app/services/datos.service';
import { UpdateRouteService } from 'src/app/services/update-route.service';

@Component({
  selector: 'app-purchased-course',
  templateUrl: './purchased-course.component.html',
  styleUrls: ['./purchased-course.component.scss']
})
export class PurchasedCourseComponent implements OnInit {

  panelOpenState = false;
  course!: Course;

  constructor(private courseService: CourseService, private updateRoute: UpdateRouteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseService.getCourseById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((data: any) => {
        this.course = data.course;
      });
  }
}
