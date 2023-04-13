import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("Usuarios para probar en la consola del navegador");
    console.log("Usuarios de prueba\n\n Admin: \n User: admin@admin \n Password: admin \n\n NO admin: \n User: ana.garcia@example.com \n Password: password")
  }

}
