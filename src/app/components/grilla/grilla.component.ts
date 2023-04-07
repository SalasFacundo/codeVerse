import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from '../modales/modal-crear-alumno/modal-crear-alumno.component';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'name', 'lastName',  'course', "action"];
  dataSource = [
    {dni: 11111111, name: 'Ana', lastName: 'García', course: 'curso'},
    {dni: 22222222, name: 'Juan', lastName: 'Rodríguez', course: 'curso'},
    {dni: 33333333, name: 'María', lastName: 'López', course: 'curso'},
    {dni: 44444444, name: 'David', lastName: 'Martínez', course: 'curso'},
    {dni: 55555555, name: 'Laura', lastName: 'Sánchez', course: 'curso'},
    {dni: 66666666, name: 'Carlos', lastName: 'Gómez', course: 'curso'},
    {dni: 77777777, name: 'Sofía', lastName: 'Pérez', course: 'curso'},
    {dni: 88888888, name: 'Pedro', lastName: 'Hernández', course: 'curso'},
    {dni: 99999999, name: 'Lucía', lastName: 'Flores', course: 'curso'},
    {dni: 12345678, name: 'Jorge', lastName: 'Díaz', course: 'curso'}
  ];

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFormCreateStudent(): void{
    const dialog = this.matDialog.open(ModalCrearAlumnoComponent);
    dialog.afterClosed().subscribe((valor) => {
      this.dataSource = [ ...this.dataSource, valor]
    })    
  }

  openDeleteStudent(value: number): void{
    const dialog = this.matDialog.open(DeleteStudentComponent);
    dialog.afterClosed().subscribe((valor) => {
      this.dataSource = this.dataSource.filter((item) => item.dni !== value)
    })    
  }

}
