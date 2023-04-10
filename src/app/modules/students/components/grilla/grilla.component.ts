import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from '../modales/modal-crear-alumno/modal-crear-alumno.component';
import { HttpClient } from '@angular/common/http';
import { ModifyStudentComponent } from '../modales/modify-student/modify-student.component';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit, OnDestroy {

  readonly studentsUrl: string = '/assets/data/json/students.json';
  displayedColumns: string[] = ['dni', 'name', 'lastName', 'course'];
  dataSource: any;
  isAdmin: any;
  value: any;

  constructor(private matDialog: MatDialog,
    private http: HttpClient) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.studentsUrl).subscribe(data => {
      this.dataSource = data;
    });
  }

  openFormCreateStudent(): void {
    const dialog = this.matDialog.open(ModalCrearAlumnoComponent);
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
      this.dataSource = this.dataSource.filter((item: any) => item.dni !== value)
    })
  }

  openModifyStudent(value: any): void {
    const dialog = this.matDialog.open(ModifyStudentComponent, { data: value });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.replaceObjectById(this.dataSource, valor)
      }
    })
  }

  replaceObjectById(array: any, newObject: any): void {
    const index = array.findIndex((obj: any) => obj.id === newObject.originalId);
    if (index !== -1) {
      array[index] = newObject.formValue;
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
