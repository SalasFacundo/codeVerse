import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from '../modales/modal-crear-alumno/modal-crear-alumno.component';
import { HttpClient } from '@angular/common/http';
import { ModifyStudentComponent } from '../modales/modify-student/modify-student.component';
import { Student } from '../../models/student';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {

  readonly studentsUrl: string = '/assets/data/json/students.json';
  displayedColumns: string[] = ['dni', 'fullName', 'course'];
  dataSource: Student[] = [];
  isAdmin: boolean = false;
  value: number = 0;
  articulos: any;

  constructor(private matDialog: MatDialog,
              private http: HttpClient,
              private datosService: DatosService
    ) { }

  ngOnInit(): void {

    this.datosService.getStudents().subscribe(data => {
      this.dataSource = data;
    });
  }

  openFormCreateStudent(): void {
    const dialog = this.matDialog.open(ModalCrearAlumnoComponent, { data: {students: this.dataSource} });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        valor.id = (this.getLastId() + 1)
        this.dataSource = [...this.dataSource, valor]
      }
    })
  }

  openDeleteStudent(value: number): void {
    const dialog = this.matDialog.open(DeleteStudentComponent);
    dialog.afterClosed().subscribe((valor) => {
      if(valor == 'delete'){
        this.dataSource = this.dataSource.filter((item: Student) => item.dni !== value);
      }
    })
  }

  openModifyStudent(value: number): void {
    const dialog = this.matDialog.open(ModifyStudentComponent, { data: {idSelected: value, students: this.dataSource} });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.replaceObjectById(this.dataSource, valor)
      }
    })
  }

  replaceObjectById(array: Student[], newObject: any): void {
    const index = array.findIndex((obj: Student) => obj.id === newObject.originalId);
    if (index !== -1) {
      array[index] = newObject.formValue;
      array[index].id = newObject.originalId;
    } else {
      throw new Error(`Object with ID ${newObject.id} not found in array`);
    }
    this.dataSource = [...array];
  }

  getLastId() {
    return this.dataSource[this.dataSource.length - 1].id;
  }

  toggleSlider() {
    if (this.isAdmin) {
      this.displayedColumns.push('action')
    } else if (this.displayedColumns.indexOf('action') != -1) {
      this.displayedColumns.splice(this.displayedColumns.indexOf('action'), 1)
    }

  }

}
