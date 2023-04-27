import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsModule } from './/feature_modules//students/students.module';
import { LoginModule } from './/feature_modules//login/login.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NavbarModule } from './/feature_modules//navbar/navbar.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CoursesModule } from './/feature_modules//courses/courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    LoginModule,
    NavbarModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    CoursesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
