import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customValidator } from '../../../../../Validators/customValidators';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.scss']
})
export class ModifyStudentComponent implements OnInit {

  readonly studentsUrl: string = '/assets/data/json/students.json';
  student: any = {};
  
  nameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  lastNameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  dniControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), customValidator.dniDuplicated( this.data.students, this.data.idSelected.id), customValidator.justNumbers()]);
  emailControl = new FormControl('', [Validators.required, customValidator.emailDuplicated( this.data.students, this.data.idSelected.id)]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    email: this.emailControl
  })
  constructor(private dialogRef: MatDialogRef<ModifyStudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadDate();
  }

  save(){
    this.dialogRef.close({formValue: this.alumnosForm.value,
                          originalId: this.data.idSelected.id})
  }

  cancel(){
    this.dialogRef.close();
  }

  loadDate(){
    this.alumnosForm.controls['name'].setValue(this.data.idSelected.name);
    this.alumnosForm.controls['lastName'].setValue(this.data.idSelected.lastName);
    this.alumnosForm.controls['dni'].setValue(this.data.idSelected.dni);
    this.alumnosForm.controls['email'].setValue(this.data.idSelected.email);
  }

}
