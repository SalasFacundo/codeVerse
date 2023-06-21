import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UpdateRouteService } from 'src/app/services/update-route.service';
import { LoginService } from 'src/app/services/loginService';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';

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
  userLogged = this.loginService.getUser();
  userIsAdmin!: boolean;

  constructor(private loginService: LoginService,
              private router: Router,
              private updateRoute: UpdateRouteService) { }

  ngOnInit(): void {
    this.updateRoute.subscribeToUrlChanges().subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
    this.userIsAdmin = this.userLogged.role == UserRoleEnum.ADMIN;
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
}
