import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { GrillaComponent } from './components/grilla/grilla.component';
import { ModalCrearAlumnoComponent } from './components/modal-crear-alumno/modal-crear-alumno.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrillaComponent,
    ModalCrearAlumnoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
