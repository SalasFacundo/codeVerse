import { Input, OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-crear-alumno',
  templateUrl: './modal-crear-alumno.component.html',
  styleUrls: ['./modal-crear-alumno.component.scss']
})
export class ModalCrearAlumnoComponent implements OnInit {

  @Input()
  modalType: string = "";

  nameControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  lastNameControl = new FormControl('', [Validators.required]);
  dniControl = new FormControl('', [Validators.required]);
  courseControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    course: this.courseControl
  })
  constructor(private dialogRef: MatDialogRef<ModalCrearAlumnoComponent>) { }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.alumnosForm.value)
  }
}
