import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StudentsModule } from '../students/students.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DefaultNavbarComponent } from './components/default-navbar/default-navbar.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CoursesModule } from '../courses/courses.module';
import { NavbarRoutingModule } from './navbar-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RouterModule.forChild([]),
    BrowserAnimationsModule,
    CoursesModule,
    MatMenuModule,
    MatButtonToggleModule,
    NavbarRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
