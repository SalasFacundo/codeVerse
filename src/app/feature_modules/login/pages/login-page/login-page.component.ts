import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private datos: DatosService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.logOut()
    console.log("Usuarios de prueba\n\n Admin: \n User: admin@admin\n Password: admin\n\n NO admin: \n User: pedro.martinez@example.com\n Password: password1")
  }
}
