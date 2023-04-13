import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/students/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {

  @Input()
  width: number=600;

  @Input()
  height: number=350;

  users: User[] = [];
  
  constructor(private router: Router,
              private datosService: DatosService,
              private userLogged: UserLoggedService) { }

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })

  ngOnInit(): void {
    this.datosService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  redirect(){
    alert("entra")
    this.router.navigate(['/students']);
  }

  loginValidator(){
    console.log("entra")
    this.users.forEach(user => {
      if(user.email == this.emailControl.value && user.password == this.passwordControl.value)
      {
        this.userLogged.setUser(user);
        this.router.navigate(['/students']);
        console.log("USUARIO")
        console.log(this.userLogged.getUser())
      }
    });
    
  }
}
