import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService} from 'src/app/services/login.service';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  @Input()
  width: number = 600;

  @Input()
  height: number = 350;

  users: User[] = [];

  constructor(
    private router: Router,
    private datosService: DatosService,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) {}

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  ngOnInit(): void {
    this.datosService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  loginValidator() {
    this.loginService.validateLogin(this.emailControl.value, this.passwordControl.value).subscribe(
      response => {
        this.loginValidatorOK(response);
      },
      error => {
        this.loginValidatorERROR(error);
      }
    );
  }

  loginValidatorOK(user: any){
    this.loginService.logIn(user.usuario[0]);
    this.router.navigate(['/home']);
    this.snackBar.dismiss();
  }

  loginValidatorERROR(error: any){
    this.snackBar.open('Email o contraseña incorrectos', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
