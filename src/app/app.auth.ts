import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router : Router, private cookieService: CookieService){}
  canActivate () : boolean{
    if(this.cookieService.get('currentUserId').toString() != ""){
      return true;
    }
    else{
      this._router.navigate(['login'])
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginRedirect implements CanActivate {
  constructor(private _router : Router, private cookieService: CookieService){}
  canActivate () : boolean{
    if(this.cookieService.get('currentUserId').toString() != ""){
      this._router.navigate([''])
      return false;
    }
    else{
      return true;
    }
  }
}
