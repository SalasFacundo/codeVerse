import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { NavbarComponent } from './modules/navbar/components/navbar/navbar.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginGuard } from './guards/login-guard';
import { GrillaComponent } from './modules/students/components/grilla/grilla.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  {
    path: 'inicio', component: NavbarComponent, canActivate: [AuthGuard],
    children: [
      { path: 'students', component: GrillaComponent },
      { path: 'courses', component: CoursesComponent},
    ]
  },

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
