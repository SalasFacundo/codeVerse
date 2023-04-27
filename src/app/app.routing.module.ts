import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './/feature_modules//login/pages/login-page/login-page.component';
import { NavbarComponent } from './/feature_modules//navbar/components/navbar/navbar.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginGuard } from './guards/login-guard';
import { GrillaComponent } from './/feature_modules//students/components/grilla/grilla.component';
import { AllCoursesComponent } from './/feature_modules//navbar/pages/all-courses/all-courses.component';
import { PurchasedCourseComponent } from './/feature_modules//courses/pages/purchased-course/purchased-course.component';
import { BuyCourseComponent } from './/feature_modules//courses/components/buy-course/buy-course.component';
import { CourseGuard } from './guards/course-guard';
import { AllStudentsPageComponent } from './/feature_modules//students/pages/all-students-page/all-students-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  {
    path: 'home', component: NavbarComponent, canActivate: [AuthGuard],
    children: [
      { path: 'students', component: AllStudentsPageComponent},
      { path: 'courses', component: AllCoursesComponent},
      { path: 'courseDetail/:id', component: PurchasedCourseComponent, canActivate: [CourseGuard]},
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
