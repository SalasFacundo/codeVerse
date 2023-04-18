import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/students/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.scss']
})
export class DefaultNavbarComponent implements OnInit {

  loggedUser!: User;

  constructor(private datosService: DatosService,
              private user: UserLoggedService) { }

  ngOnInit(): void {
    this.loggedUser = this.user.getUser();
  }

}
