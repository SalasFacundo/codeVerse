import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { UserLoggedService } from '../services/user-logged.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor( private datos: DatosService, private userLogged: UserLoggedService, private router: Router) { }

    canActivate(): boolean {
        if (this.userLogged.isAuthenticated) {
            this.router.navigate(['/inicio']);            
            return false;
        } else {
            return true;
        }
    }

    redirectLogin(){
        
    }
}
