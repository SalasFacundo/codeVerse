import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRouteService {

  private currentUrl = "";
  private currentUrlSubject = new Subject<string>();

  constructor(private router: Router) { }

  subscribeToUrlChanges() {
    return this.router.events;
  }
}
