import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<DeleteStudentComponent>) { }

  ngOnInit(): void {
  }

  onClickCancel(){
    this.dialogRef.close("cancel");
  }

  onClickDelete(){
    this.dialogRef.close("delete");
  }

}
