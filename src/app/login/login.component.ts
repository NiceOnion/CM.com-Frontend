import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
  name: string = "";
  password: string = "";
  user: User[] = [];
  constructor(private ApiService: ApiService) {
  }
  loginClick ():void{
    this.ApiService.login(this.name, this.password).subscribe((data : any) => {console.log(data);}, error => {console.log(error)});
  }
}

class User{
  id: number = 0;
  name : string = "";
  password: string = "";
}
