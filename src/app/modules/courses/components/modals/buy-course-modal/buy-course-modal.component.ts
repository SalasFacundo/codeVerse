import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-course-modal',
  templateUrl: './buy-course-modal.component.html',
  styleUrls: ['./buy-course-modal.component.scss']
})
export class BuyCourseModalComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  creditCardForm!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { 
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });

    this.createForm();
  }

  ngOnInit(): void {

    
  }

  createForm() {
    this.creditCardForm = this._formBuilder.group({
      cardholderName: ['', Validators.required],
      cardNumber: ['', [Validators.required]],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  submitForm() {
    console.log(this.creditCardForm.value);
  }

}
