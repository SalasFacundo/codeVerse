import { Component, OnInit } from '@angular/core';
import { User } from 'src/app//feature_modules//students/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.scss'],
})
export class DefaultNavbarComponent implements OnInit {
  loggedUser!: User;
  grillaSize: number = 0;
  welcomeMessage!: string;

  constructor(
    private datosService: DatosService,
    private user: UserLoggedService
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.user.getUser();
    this.welcomeMessage = this.loggedUser.isAdmin
      ? 'Bienvenido al área administrador, aqui podrás agregar, modificar, o eliminar tanto cursos, como alumnos, y visualizar sus datos!'
      : '¡Aqui podrás visualizar tus cursos!';
  }

  onGrillaSize(event: any) {
    this.grillaSize = event;
  }
}
