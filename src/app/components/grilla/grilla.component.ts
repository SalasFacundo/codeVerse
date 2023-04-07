import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from '../modales/modal-crear-alumno/modal-crear-alumno.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit, OnDestroy {

  readonly studentsUrl: string = '/assets/data/json/students.json';
  displayedColumns: string[] = ['dni', 'name', 'lastName',  'course', "action"];
  dataSource: any;

  constructor(private matDialog: MatDialog,
              private http: HttpClient) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.studentsUrl).subscribe(data => {
      this.dataSource = data;
    });
    console.log(JSON.stringify(this.dataSource))
  }

  openFormCreateStudent(): void{
    const dialog = this.matDialog.open(ModalCrearAlumnoComponent);
    dialog.afterClosed().subscribe((valor) => {
      if(valor){
        this.dataSource = [ ...this.dataSource, valor]
      }      
    })    
  }

  openDeleteStudent(value: number): void{
    const dialog = this.matDialog.open(DeleteStudentComponent);
    dialog.afterClosed().subscribe((valor) => {
      this.dataSource = this.dataSource.filter((item: any) => item.dni !== value)
    })    
  }

}
