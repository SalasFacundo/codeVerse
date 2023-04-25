import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-student-details-modal',
  templateUrl: './student-details-modal.component.html',
  styleUrls: ['./student-details-modal.component.scss']
})
export class StudentDetailsModalComponent implements OnInit {

  user = this.data;
  courses!:any;

  constructor(private dataUser: DatosService,
              private dialogRef: MatDialogRef<StudentDetailsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,){}

  ngOnInit(): void {
    this.dataUser.getCoursesByStudentId(this.data.id).subscribe(
      value => {this.courses = value}
    );
  }

  onClickButton(value: any){
    this.dataUser.removeStudentFromCourse(value.id, this.data.id)
    this.closeModal();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
