import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [CookieService]
})
export class ToolbarComponent {
  constructor(private ApiService: ApiService, private router: Router, private cookieService: CookieService) {}
  //Retrieves the username stored in the cookies
  getName() {
    if(this.cookieService.get('currentUserName') == ""){
      return null;
    }
    else{
      return this.cookieService.get('currentUserName');
    }
  }
  //If the user is logged in, the icon button will redirect to the home page. Otherwise, it will return to the login page
  iconButton(): string{
    if(this.cookieService.get('currentUserName') != ""){
      return "";
    }
    else{
      return "login";
    }
  }
  //A function that clears all the user's cookies and returns the login page
  logOut(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }
}
