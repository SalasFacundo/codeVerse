import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService } from 'src/app/services/loginService';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.scss'],
})
export class DefaultNavbarComponent implements OnInit {
  userLogged!: User;
  grillaSize: number = 0;
  welcomeMessage!: string;
  userIsAdmin!: boolean;

  constructor(
    private datosService: DatosService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userLogged = this.loginService.getUser();
    this.welcomeMessage = this.userLogged.role == UserRoleEnum.ADMIN
      ? 'Bienvenido al área administrador, aqui podrás agregar, modificar, o eliminar tanto cursos, como alumnos, y visualizar sus datos!'
      : '¡Aqui podrás visualizar tus cursos!';
    this.userIsAdmin = this.userLogged.role == UserRoleEnum.ADMIN;
  }

  onGrillaSize(event: any) {
    this.grillaSize = event;
  }
}
