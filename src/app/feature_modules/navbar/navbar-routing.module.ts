import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { AllStudentsPageComponent } from '../students/pages/all-students-page/all-students-page.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { PurchasedCourseComponent } from '../courses/pages/purchased-course/purchased-course.component';
import { CourseGuard } from 'src/app/guards/course-guard';
import { ModifyUserComponent } from '../user/pages/modify-user/modify-user.component';

const routes: Routes =[

  {
    path: 'home', component: NavbarComponent, canActivate: [AuthGuard],
    children: [
      { path: 'students', component: AllStudentsPageComponent},
      { path: 'courses', component: AllCoursesComponent},
      { path: 'courseDetail/:id', component: PurchasedCourseComponent, canActivate: [CourseGuard]},
      { path: 'modifyProfile', component: ModifyUserComponent},
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NavbarRoutingModule { }
