import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-modify-course-modal',
  templateUrl: './modify-course-modal.component.html',
  styleUrls: ['./modify-course-modal.component.scss']
})
export class ModifyCourseModalComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  capacityControl = new FormControl('', [Validators.required]);
  priceControl = new FormControl('', [Validators.required]);
  startDateControl = new FormControl('', [Validators.required]);
  endDateControl = new FormControl('', [Validators.required]);
  startHourControl = new FormControl('', [Validators.required]);
  endHourControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    capacity: this.capacityControl,
    price: this.priceControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
    startHour: this.startHourControl,
    endHour: this.endHourControl,
  })

  constructor(private dialogRef: MatDialogRef<ModifyCourseModalComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadDate();
    console.log(this.data)
  }

  closeModal(){
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.alumnosForm.value);
  }

  loadDate(){
    this.alumnosForm.controls['name'].setValue(this.data.name);
    this.alumnosForm.controls['capacity'].setValue(this.data.capacity);
    this.alumnosForm.controls['price'].setValue(this.data.price);
    this.alumnosForm.controls['startDate'].setValue(this.data.startDate);
    this.alumnosForm.controls['endDate'].setValue(this.data.endDate);
    this.alumnosForm.controls['startHour'].setValue(this.data.startHour);
    this.alumnosForm.controls['endHour'].setValue(this.data.endHour);
  }

}