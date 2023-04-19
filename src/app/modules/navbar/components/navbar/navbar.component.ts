import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UpdateRouteService } from 'src/app/services/update-route.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpened: boolean = false;
  replace : boolean = true;
  onHome: boolean = false;
  currentUrl = window.location.pathname;

  constructor(private loginService: UserLoggedService, 
              private router: Router,
              private route: ActivatedRoute,
              private updateRoute: UpdateRouteService) { }

  ngOnInit(): void {
    this.updateRoute.subscribeToUrlChanges().subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  updateUrl(url: string){
    this.currentUrl = url;
  }
}
