import { Input, OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { customValidator } from 'src/app/Validators/customValidators';


@Component({
  selector: 'app-modal-crear-alumno',
  templateUrl: './modal-crear-alumno.component.html',
  styleUrls: ['./modal-crear-alumno.component.scss']
})
export class ModalCrearAlumnoComponent implements OnInit {

  @Input()
  modalType: string = "";

  nameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  dniControl = new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8), customValidator.dniDuplicated(this.data.students)]);
  courseControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    course: this.courseControl
  })
  constructor(private dialogRef: MatDialogRef<ModalCrearAlumnoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.alumnosForm.value)
  }
}
