import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Course } from 'src/app//feature_modules//students/models/course';
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

  constructor(private dataService: DatosService, private updateRoute: UpdateRouteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.dataService.getCourseById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe(course => {
        this.course = course[0];
      });
  }
}
