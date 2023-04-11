import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective {

  @Input() 
  fontSize: string ='';
  
  constructor(private element: ElementRef) { 
    element.nativeElement.style.fontSize = '20px'
  }

  ngOnInit() {
    if (this.fontSize) {
      this.element.nativeElement.style.fontSize = this.fontSize;
    }
  }
  
  
}
