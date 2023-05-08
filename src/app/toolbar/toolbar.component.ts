import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(private ApiService: ApiService, private router: Router) {}
  //Retrieves the username stored in the cookies
  getName() {
    return sessionStorage.getItem('currentUserName');
  }
  //If the user is logged in, the icon button will redirect to the home page. Otherwise, it will return to the login page
  iconButton(): string{
    if(sessionStorage.getItem('currentUserName') != null){
      return "home";
    }
    else{
      return "";
    }
  }
  //A function that clears all the user's cookies and returns the login page
  logOut(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
