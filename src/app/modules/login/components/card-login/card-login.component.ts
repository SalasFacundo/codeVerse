import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    passwordName: this.passwordControl
  })

  ngOnInit(): void {
  }

  redirect(){
    alert("entra")
    this.router.navigate(['/students']);
  }

}
