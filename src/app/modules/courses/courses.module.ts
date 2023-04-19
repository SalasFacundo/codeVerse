import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PurchasedCourseComponent } from './pages/purchased-course/purchased-course.component';
import { StudentsModule } from '../students/students.module';



@NgModule({
  declarations: [
    CoursesComponent,
    PurchasedCourseComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,    
    MatButtonModule,
    RouterModule,
    StudentsModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
