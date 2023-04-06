import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  dni: number;
  name: string;
  lastName: string;
  course: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dni: 1, name: 'Hydrogen', lastName:  'Hydrogen', course: 'curso'},
  {dni: 2, name: 'Helium', lastName:  'Helium', course: 'curso'},
  {dni: 3, name: 'Lithium', lastName:   'Lithium', course: 'curso'},
  {dni: 4, name: 'Beryllium', lastName:  'Beryllium', course: 'curso'},
  {dni: 5, name: 'Boron', lastName:  'Boron', course: 'curso'},
  {dni: 6, name: 'Carbon', lastName:  'Carbon', course: 'curso'},
  {dni: 7, name: 'Nitrogen', lastName:  'Nitrogen', course: 'curso'},
  {dni: 8, name: 'Oxygen', lastName:  'Oxygen', course: 'curso'},
  {dni: 9, name: 'Fluorine', lastName:  'Fluorine', course: 'curso'},
  {dni: 10, name: 'Neon', lastName:  'Neon', course: 'curso'},
];

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'name', 'lastName',  'course', "action"];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
