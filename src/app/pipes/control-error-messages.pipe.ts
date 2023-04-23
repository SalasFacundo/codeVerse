import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {

    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      email: 'Ingrese un email valido',
      minlength: `Este campo debe tener ${error.value.requiredLength} caracteres`,
      maxlength: `Este campo debe tener ${error.value.requiredLength} caracteres`,
      dniDuplicated: 'El dni ya se encuentra',
      justNumbers: 'Solo puede contener numeros',
      justLetters: 'Solo puede contener letras',
      invalidDate: 'Respete el formato mm/yy',
      range: `Campo Invalido`,
      emailDuplicated: `El email ya se encuentra`,
    }
        
    return opciones[error.key];
  }

}
