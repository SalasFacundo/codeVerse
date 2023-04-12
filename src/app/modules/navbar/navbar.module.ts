import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StudentsModule } from '../students/students.module';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    StudentsModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
