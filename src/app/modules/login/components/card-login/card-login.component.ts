import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    alert("entra")
    this.router.navigate(['/students']);
  }

}
