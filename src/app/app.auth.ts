import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router : Router){}
  canActivate () : boolean{
    return localStorage.getItem('currentUserId') != null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginRedirect implements CanActivate {
  constructor(private _router : Router){}
  canActivate () : boolean{
    if(localStorage.getItem('currentUserId') == null){
      return true;
    }
    else{
      this._router.navigate(['home'])
      return false;
    }
  }
}
