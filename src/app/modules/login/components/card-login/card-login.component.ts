import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {

  @Input()
  width: number=600;
  @Input()
  height: number=350;
  constructor() { }

  ngOnInit(): void {
  }

}
