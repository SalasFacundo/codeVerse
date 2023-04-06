import { OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-crear-alumno',
  templateUrl: './modal-crear-alumno.component.html',
  styleUrls: ['./modal-crear-alumno.component.scss']
})
export class ModalCrearAlumnoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalCrearAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  onClickNo(): void { 
    this.dialogRef.close();   
  }
}
