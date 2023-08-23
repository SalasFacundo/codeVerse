import { AbstractControl,  ValidatorFn } from '@angular/forms';

export class customValidator {
  static dniDuplicated(students: any[], id?: number): ValidatorFn {
    return (control: AbstractControl): any => {
      if (id) {
        if (students.find((obj) => obj.dni == control.value && obj.id != id)) {
          return { dniDuplicated: true };
        }
      } else {
        if (students.find((obj) => obj.dni == control.value)) {
          return { dniDuplicated: true };
        }
      }
      return null;
    };
  }

  static emailDuplicated(students: any[], id?: number): ValidatorFn {
    return (control: AbstractControl): any => {
      if (id) {
        if (
          students.find((obj) => obj.email == control.value && obj.id != id)
        ) {
          return { emailDuplicated: true };
        }
      } else {
        if (students.find((obj) => obj.email == control.value)) {
          return { emailDuplicated: true };
        }
      }
      return null;
    };
  }

  static justNumbers() {
    return (control: AbstractControl): any => {
      const regex = /^[0-9]+$/;
      if (control.value.toString().match(regex) !== null) {
        return null;
      } else {
        if (control.value.length != 0) {
          return { justNumbers: true };
        } else {
          return null;
        }
      }
    };
  }

  static justLetters() {
    return (control: AbstractControl): any => {
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
      if (control.value.match(regex) !== null) {
        return null;
      } else {
        if (control.value.length != 0) {
          return { justLetters: true };
        } else {
          return null;
        }
      }
    };
  }

  static range(min: number, max: number) {
    return (control: AbstractControl): any => {
      if (
        (Number(control.value) >= min && Number(control.value) <= max) ||
        control.value == '' ||
        control.value.length < 2
      ) {
        return null;
      } else {
        return { range: true };
      }
    };
  }
}
