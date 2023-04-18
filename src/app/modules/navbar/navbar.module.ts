import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StudentsModule } from '../students/students.module';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { RouterModule } from '@angular/router';
import { DefaultNavbarComponent } from './components/default-navbar/default-navbar.component';
import { CoursesModule } from '../courses/courses.module';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';






@NgModule({
  declarations: [
    NavbarComponent,
    DefaultNavbarComponent,
    AllCoursesComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    StudentsModule,
    MatButtonModule,    
    AppRoutingModule,
    RouterModule.forChild([]),
    CoursesModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
