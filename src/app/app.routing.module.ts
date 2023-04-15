import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { NavbarComponent } from './modules/navbar/components/navbar/navbar.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginGuard } from './guards/login-guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'students', component: NavbarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
