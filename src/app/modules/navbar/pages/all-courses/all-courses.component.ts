import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { UpdateRouteService } from 'src/app/services/update-route.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  currentUrl = window.location.pathname;

  constructor(private updateRoute: UpdateRouteService) { }

  ngOnInit(): void {
    this.updateRoute.subscribeToUrlChanges().subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

}
