import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app//feature_modules//students/models/user';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-details-course-modal',
  templateUrl: './details-course-modal.component.html',
  styleUrls: ['./details-course-modal.component.scss']
})
export class DetailsCourseModalComponent implements OnInit {


  user = this.data;
  courses = this.dataUser.getCourseById(this.data.id);
  user$:any;
  students!: Observable<any> ;

  constructor(private dataUser: DatosService,
    private dialogRef: MatDialogRef<DetailsCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close()
  }

  onClickButton(studentId: number){
    this.dataUser.removeStudentFromCourse(this.data.id, studentId);
  }

  getStudentById(id: number) {
    return this.dataUser.getStudentById(id)
  }




}
