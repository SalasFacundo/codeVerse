import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../modales/delete-student/delete-student.component';
import { ModalCrearAlumnoComponent } from '../modales/modal-crear-alumno/modal-crear-alumno.component';
import { HttpClient } from '@angular/common/http';
import { ModifyStudentComponent } from '../modales/modify-student/modify-student.component';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService } from 'src/app/services/loginService';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailsModalComponent } from '../modales/student-details/student-details-modal/student-details-modal.component';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {

  @Input()
  filter: string = ""
  displayedColumns: string[] = ['fullName', 'email'];
  dataSource: User[] = [];
  isAdmin: boolean = false;
  value: number = 0;
  articulos: any;
  user!: User;

  constructor(private matDialog: MatDialog,
              private http: HttpClient,
              private datosService: DatosService,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.fillColumns();
    this.user = this.loginService.getUser();
    this.isAdmin = this.user.role == UserRoleEnum.ADMIN;
    this.addColumns();
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
        this.dataSource = this.dataSource.filter((item: User) => item.dni !== value);
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

  openStudentDetails(value: number){
    const dialog = this.matDialog.open(StudentDetailsModalComponent, {data: value});
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
      }
    })
  }

  replaceObjectById(array: User[], newObject: any): void {
    const index = array.findIndex((obj: User) => obj.id === newObject.originalId);
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

  addColumns() {
    if (this.isAdmin) {
      this.displayedColumns.push('dni')
      this.displayedColumns.push('action')
    } else if (this.displayedColumns.indexOf('action') != -1 && this.displayedColumns.indexOf('dni') != -1 && this.displayedColumns.indexOf('course') != -1 ) {
      this.displayedColumns.splice(this.displayedColumns.indexOf('dni'), 1)
      this.displayedColumns.splice(this.displayedColumns.indexOf('action'), 1)
    }

  }

  fillColumns(){
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      if (this.filter == 'students') {
        this.datosService
          .getCourseById(
            Number(this.activatedRoute.snapshot.paramMap.get('id'))
          )
          .subscribe((value) => {
            this.datosService.getUsersById(value[0].students).subscribe(valor => {this.dataSource = valor})
          });
      }  else if (this.filter == 'teachers') {
        this.datosService
          .getCourseById(
            Number(this.activatedRoute.snapshot.paramMap.get('id'))
          )
          .subscribe((value) => {
            this.datosService.getUsersById(value[0].teachers).subscribe(valor => {this.dataSource = valor})
          });
      }
    } else {
      if(this.filter == "allStudents"){
        this.datosService.getStudents().subscribe(data=> this.dataSource=data)
      }
      this.datosService.getStudents().subscribe((data) => {
        this.dataSource = data;
      });
    }
  }

}
