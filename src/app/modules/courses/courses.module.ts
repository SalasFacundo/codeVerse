import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,    
    MatButtonModule,
    RouterModule
  ]
})
export class CoursesModule { }
