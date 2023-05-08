import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router : Router){}
  canActivate () : boolean{
    return sessionStorage.getItem('currentUserId') != null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginRedirect implements CanActivate {
  constructor(private _router : Router){}
  canActivate () : boolean{
    let name = localStorage.getItem('currentUserName');
    let id = localStorage.getItem('currentUserId');
    if(name != null && id != null){
      sessionStorage.setItem('currentUserId', id)
      sessionStorage.setItem('currentUserName', name)
    }
    if(sessionStorage.getItem('currentUserId') == null){
      return true;
    }
    else{
      this._router.navigate(['home'])
      return false;
    }
  }
}
