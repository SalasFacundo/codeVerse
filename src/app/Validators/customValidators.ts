import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { User } from '../modules/students/models/user';
import { DatosService } from '../services/datos.service';

export class customValidator {

    static dniDuplicated(students: any[], id?: number,): ValidatorFn {

        return (control: AbstractControl): any => {
            if (id) {
                if (students.find(obj => obj.dni == control.value && obj.id != id)) {
                    return { dniDuplicated: true };
                }
            } else {
                if (students.find(obj => obj.dni == control.value)) {
                    return { dniDuplicated: true };
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
                return { justNumbers: true };
            }
        };
    }

    static justLetters() {

        return (control: AbstractControl): any => {
            const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
            if (control.value.match(regex) !== null) {
                return null;
            } else {
                return { justLetters: true };
            }
        };
    }

    /* static incorrectPassword(users: Observable<any>) {
        let usuarios;
        users.subscribe(users=>{
            users.forEach((user: User) => {
                if(ControlContainer.)
            });



        })
       console.log("usuarios")
        console.log(usuarios)
        return (control: AbstractControl): any => {
            const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
            if (control.value.match(regex) !== null) {
                return null;
            } else {
                return { justLetters: true };
            }
        };
    } */
    /* static incorrectPassword(datos: DatosService) {

        let users: User[]
        datos.getUsers().subscribe(data => {
            console.log(data);
            (control: AbstractControl): any => {
                const email = control.get('email')?.value;
                const password = control.get('password')?.value;

                console.log("email")
                console.log(email)
                console.log("password")
                console.log(password)
            }

        });
        return (control: AbstractControl): any => {
            console.log
            const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
            if (control.value.match(regex) !== null) {
                return null;
            } else {
                return { justLetters: true };
            }
        };
    }
 */

    /*   static incorrectPassword2(http: HttpClient) {
          return (control: AbstractControl): Observable<ValidationErrors | null> => {
              const email = control.get('email')?.value;
              const password = control.get('password')?.value;
  
              console.log("ENTRA")
              return http.get<any>('assets/users.json').pipe(
                  map(users => {
                      const user = users.find((u: any) => u.email === email && u.password === password);
                      console.log("user")
                      console.log(user)
                      return user ? null : { invalidLogin: true };
                  })
              );
          };
      } */
}
