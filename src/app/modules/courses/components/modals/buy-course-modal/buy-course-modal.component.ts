import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-course-modal',
  templateUrl: './buy-course-modal.component.html',
  styleUrls: ['./buy-course-modal.component.scss']
})
export class BuyCourseModalComponent implements OnInit {

  
  cardNameControl = new FormControl('', [Validators.required]);
  cardNumberControl = new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
  cardDateControl = new FormControl('', [Validators.required]);
  cvvControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
  
  creditCardForm = new FormGroup({
    cardName: this.cardNameControl,
    CardNumber: this.cardNumberControl,
    cardDate: this.cardDateControl,
    cvv: this.cvvControl
  })
  constructor() {

  }

  ngOnInit(): void {
    
    this.createForm();

    
  }

  createForm() {    
  }

  submitForm() {
    console.log(this.creditCardForm.invalid);
    console.log(this.creditCardForm.controls)
  }

}
