import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { NavbarComponent } from './modules/navbar/components/navbar/navbar.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginGuard } from './guards/login-guard';
import { GrillaComponent } from './modules/students/components/grilla/grilla.component';
import { AllCoursesComponent } from './modules/navbar/pages/all-courses/all-courses.component';
import { PurchasedCourseComponent } from './modules/courses/pages/purchased-course/purchased-course.component';
import { BuyCourseComponent } from './modules/courses/components/buy-course/buy-course.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  {
    path: 'home', component: NavbarComponent, canActivate: [AuthGuard],
    children: [
      { path: 'students', component: GrillaComponent },
      { path: 'courses', component: AllCoursesComponent},
      { path: 'courseDetail/:id', component: PurchasedCourseComponent},
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
