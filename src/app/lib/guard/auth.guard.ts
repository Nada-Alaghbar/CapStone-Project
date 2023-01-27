import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../interFaces/loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let guardObsv  =this.loginService.userState$
      .pipe(
        map((value)=> {
          if(value) return true;
          else {
            //navigate to auth/login
            this.router.navigate(['/login']);

            return false;
          } 

        })
      )
      return guardObsv;
  }
  
}
