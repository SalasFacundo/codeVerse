import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AppRoutingModule } from 'src/app/app.routing.module';



@NgModule({
  declarations: [
    CardLoginComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    NavbarModule,
    AppRoutingModule
  ],
  exports: [
    CardLoginComponent,
    LoginPageComponent    
    ]
})
export class LoginModule { }
