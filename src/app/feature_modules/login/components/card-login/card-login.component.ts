import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app//feature_modules//students/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { customValidator } from 'src/app/Validators/customValidators';
import { login } from '../../login.actions';

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
    private userLogged: UserLoggedService,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient,
    private store: Store
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
    this.httpClient
      .get<any[]>(
        `http://localhost:3000/users?email=${this.emailControl.value}&password=${this.passwordControl.value}`
      )
      .subscribe((users) => {
        if (users.length != 0) {
          this.userLogged.logIn(users[0]);
          this.store.dispatch(login({  user: users[0] }));
          this.router.navigate(['/home']);
          this._snackBar.dismiss();
        } else {
          this._snackBar.open('Email o contraseña incorrectos', 'Cerrar', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
  }
}
