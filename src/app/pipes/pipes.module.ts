import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorMessagesPipe } from './control-error-messages.pipe';
import { FullNamePipe } from './full-name.pipe';



@NgModule({
  declarations: [
    ControlErrorMessagesPipe,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlErrorMessagesPipe,
    FullNamePipe
  ]
})
export class PipesModule { }
