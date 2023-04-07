import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.scss']
})
export class ModifyStudentComponent implements OnInit {

  readonly studentsUrl: string = '/assets/data/json/students.json';
  student: any = {};
  
  nameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  dniControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  courseControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    course: this.courseControl
  })
  constructor(private dialogRef: MatDialogRef<ModifyStudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
      this.loadDate();
  }

  guardar(){
    this.dialogRef.close({formValue: this.alumnosForm.value,
                          originalId: this.data.id})
  }

  loadDate(){
    this.alumnosForm.controls['name'].setValue(this.data.name);
    this.alumnosForm.controls['lastName'].setValue(this.data.lastName);
    this.alumnosForm.controls['dni'].setValue(this.data.dni);
    this.alumnosForm.controls['course'].setValue(this.data.course);
  }

}
