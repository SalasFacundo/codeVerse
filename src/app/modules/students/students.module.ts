import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppComponent } from './app.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { GrillaComponent } from './components/grilla/grilla.component';
import { ModalCrearAlumnoComponent } from './components/modales/modal-crear-alumno/modal-crear-alumno.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
//import { ControlErrorMessagesPipe } from './pipes/control-error-messages.pipe';
import { DeleteStudentComponent } from './components/modales/delete-student/delete-student.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifyStudentComponent } from './components/modales/modify-student/modify-student.component';


@NgModule({
  declarations: [
    GrillaComponent,
    GrillaComponent,
    ModalCrearAlumnoComponent,
    DeleteStudentComponent,
    ModifyStudentComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
    GrillaComponent,
    GrillaComponent,
    ModalCrearAlumnoComponent,
    DeleteStudentComponent,
    ModifyStudentComponent
  ]
})
export class StudentsModule { }
