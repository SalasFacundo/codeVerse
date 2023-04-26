import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/modules/students/models/course';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-modify-course-modal',
  templateUrl: './modify-course-modal.component.html',
  styleUrls: ['./modify-course-modal.component.scss']
})
export class ModifyCourseModalComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  capacityControl = new FormControl('', [Validators.required, customValidator.justNumbers()]);
  priceControl = new FormControl('', [Validators.required, customValidator.justNumbers()]);
  startDateControl = new FormControl('', [Validators.required]);
  endDateControl = new FormControl('', [Validators.required]);
  startHourControl = new FormControl('', [Validators.required]);
  endHourControl = new FormControl('', [Validators.required]);

  courseForm = new FormGroup({
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

    if(this.data != 'add'){
      this.loadDate();
    }
  }

  closeModal(){
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
  save(){

    if(this.data != 'add'){
      this.dialogRef.close({action: "modify", value:this.courseForm.value});
    } else if((this.data == 'add')){
      let course : Course = this.courseForm.value;
      course.students = [];
      course.teachers = [];
      course.classes = [];
      this.dialogRef.close({action: "add", value:this.courseForm.value});
    }
  }

  loadDate(){
    this.courseForm.controls['name'].setValue(this.data.name);
    this.courseForm.controls['capacity'].setValue(this.data.capacity);
    this.courseForm.controls['price'].setValue(this.data.price);
    this.courseForm.controls['startDate'].setValue(this.data.startDate);
    this.courseForm.controls['endDate'].setValue(this.data.endDate);
    this.courseForm.controls['startHour'].setValue(this.data.startHour);
    this.courseForm.controls['endHour'].setValue(this.data.endHour);
  }

}
