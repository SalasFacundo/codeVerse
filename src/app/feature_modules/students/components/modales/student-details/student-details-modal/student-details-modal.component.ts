import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { DatosService } from 'src/app/services/datos.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-details-modal',
  templateUrl: './student-details-modal.component.html',
  styleUrls: ['./student-details-modal.component.scss']
})
export class StudentDetailsModalComponent implements OnInit {

  user = this.data;
  courses!: Course[];

  constructor(private dialogRef: MatDialogRef<StudentDetailsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private inscriptionService: InscriptionService){}

  ngOnInit(): void {

    this.inscriptionService.getCoursesByStudentId(this.data.id).subscribe( (response: any) => {
      this.courses = response.courses;
    });
  }

  onClickButton(value: any){
   this.inscriptionService.deleteUserFromInscription(this.data.id, value.id).subscribe();
   this.courses = this.courses.filter(course => course.id !== value.id)
  }

  closeModal(){
    this.dialogRef.close();
  }

}
