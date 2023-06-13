import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { LoginService } from '../services/loginService';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor( private datos: DatosService, private loginService: LoginService, private router: Router) { }

    canActivate(): boolean {
        if (this.loginService.isAuthenticated) {
            this.router.navigate(['/home']);
            return false;
        } else {
            return true;
        }
    }

    redirectLogin(){

    }
}
