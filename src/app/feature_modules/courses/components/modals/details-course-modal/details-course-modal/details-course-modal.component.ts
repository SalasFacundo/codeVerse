import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';
import { User } from 'src/app/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-details-course-modal',
  templateUrl: './details-course-modal.component.html',
  styleUrls: ['./details-course-modal.component.scss']
})
export class DetailsCourseModalComponent implements OnInit {


  user = this.data;
  courses = this.dataUser.getCourseById(this.data.id);
  users!: User[];
  students!: Observable<any> ;

  constructor(private dataUser: DatosService,
    private dialogRef: MatDialogRef<DetailsCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private inscriptionService: InscriptionService) { }

  ngOnInit(): void {
    this.getStudentByCourseId(this.data.id);
  }

  closeModal(){
    this.dialogRef.close()
  }

  onClickButton(studentId: number){
   this.inscriptionService.deleteUserFromInscription(studentId, this.data.id).subscribe( response => {
    this.users = this.users.filter(user => user.id !== studentId);

   });
  }

  getStudentById(id: number) {
    return this.dataUser.getStudentById(id)
  }

  getStudentByCourseId(courseId: number){
    this.inscriptionService.getUsersByCourseIdAndRole(courseId, UserRoleEnum.STUDENT).subscribe( (users: any) => {
      this.users = users.usuarios;
    });
  }




}
