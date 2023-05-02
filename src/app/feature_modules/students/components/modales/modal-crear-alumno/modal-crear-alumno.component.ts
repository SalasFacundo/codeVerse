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

  nameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  lastNameControl = new FormControl('', [Validators.required, customValidator.justLetters()]);
  dniControl = new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8), customValidator.dniDuplicated(this.data.students), customValidator.justNumbers()]);
  emailControl = new FormControl('', [Validators.required, customValidator.emailDuplicated( this.data.students)]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    email: this.emailControl
  })
  constructor(private dialogRef: MatDialogRef<ModalCrearAlumnoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.alumnosForm.value)
  }
}
