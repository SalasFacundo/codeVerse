import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  userLogged!: User;

  nameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  lastNameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  dniControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), customValidator.justNumbers()]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  fotoSeleccionada!: File;

  userForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userLogged = this.loginService.getUser();
    this.userService.getUsers().subscribe(response => {
      this.dniControl = new FormControl(this.userLogged.dni, [Validators.required, Validators.minLength(8), Validators.maxLength(8), customValidator.justNumbers(), customValidator.dniDuplicated( response.usuarios, this.userLogged.id)]);
      this.emailControl = new FormControl(this.userLogged.email, [Validators.required, Validators.email, customValidator.emailDuplicated( response.usuarios, this.userLogged.id)]);
      this.loadData();
    })

  }

  loadData(){
    this.userForm.controls['name'].setValue(this.userLogged.name);
    this.userForm.controls['lastName'].setValue(this.userLogged.lastName);
    this.userForm.controls['dni'].setValue(this.userLogged.dni);
    this.userForm.controls['email'].setValue(this.userLogged.email);
  }

  confirmForm(){
    if (this.userForm.valid){
      if( this.userForm.controls['password'].value == this.userLogged.password){
        this.userLogged.name = this.userForm.controls['name'].value;
        this.userLogged.lastName = this.userForm.controls['lastName'].value;
        this.userLogged.dni = this.userForm.controls['dni'].value;
        this.userLogged.email = this.userForm.controls['email'].value;

        this.snackBar.dismiss;
        this.userService.updateUser(this.userLogged.id, this.userLogged).subscribe( response => {
          this.snackBar.open('Datos actualizados con exito', 'Cerrar', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3000
          });
        });
        this.userService.uploadPicture(this.fotoSeleccionada, this.loginService.getUser().id).subscribe( (response: any) => {
          if(response.type != 0){
            this.userLogged = response.body.usuario;
            this.loginService.logIn(this.userLogged);

          }
        });
      } else {
        this.snackBar.open('Contraseña incorrecta', 'Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        });
      }
    }
  }

  uploadPicture(event: any){
    this.fotoSeleccionada = event.target.files[0];
    let imagen = document.querySelector("#vista") as HTMLImageElement;
    let objectURL = URL.createObjectURL(this.fotoSeleccionada);
    imagen.src = objectURL;
  }

}
