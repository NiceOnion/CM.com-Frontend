import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  incorrectTxt: string = '';
  user: User[] = [];
  constructor(private ApiService: ApiService, private router: Router) {}
  loginClick(): void {
    this.ApiService.login(this.name, this.password).subscribe(
      (data: any) => {
        if (data == 0) {
          console.log('Lmao');
        } else {
          localStorage.setItem('currentUserId', data);
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  show: boolean = false;

  inputTypes() {
    this.show = !this.show;
  }
}

class User {
  id: number = 0;
  name: string = '';
  password: string = '';
}
