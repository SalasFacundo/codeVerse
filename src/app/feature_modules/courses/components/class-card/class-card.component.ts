import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app//feature_modules//students/models/class';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  @Input()
  classes!: Class[];

  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
