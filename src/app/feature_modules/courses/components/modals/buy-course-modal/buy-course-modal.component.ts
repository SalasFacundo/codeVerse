import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customValidator } from 'src/app/Validators/customValidators';

@Component({
  selector: 'app-buy-course-modal',
  templateUrl: './buy-course-modal.component.html',
  styleUrls: ['./buy-course-modal.component.scss'],
})
export class BuyCourseModalComponent implements OnInit {
  cardNameControl = new FormControl('', [
    Validators.required,
    customValidator.justLetters()
  ]);
  cardNumberControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
    customValidator.justNumbers()
  ]);
  cardMonthControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(2),
    customValidator.range(1,12)
  ]);
  cardYearControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(2),
    customValidator.range(1,99)
  ]);
  cvvControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3),
    customValidator.justNumbers()
  ]);

  creditCardForm = new FormGroup({
    cardName: this.cardNameControl,
    CardNumber: this.cardNumberControl,
    cardMonth: this.cardMonthControl,
    cardYear: this.cardYearControl,
    cvv: this.cvvControl,
  });
  constructor(private dialogRef: MatDialogRef<BuyCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log("DATA")
    console.log(this.data)
  }

  submitForm() {
    this.dialogRef.close(this.creditCardForm.value)
  }
}
