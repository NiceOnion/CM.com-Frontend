import { Component} from '@angular/core';
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
  error: string = '';
  loading: boolean = false;
  constructor(private ApiService: ApiService, private router: Router) {}
  //Fetches an account from the back-end and stores them in a local cookie
  loginClick(): void {
    this.error = "";
    this.loading = true;
    this.ApiService.login(this.name, this.password).subscribe(
      (data: any) => {
        if (data == 0) {
          this.loading = false;
          this.error =
            'No account was found. Did you use the correct username and password?';
        } else {
          localStorage.setItem('currentUserId', data);
          localStorage.setItem('currentUserName', this.name);
          this.router.navigate(['home']);
        }
      },
      () => {
        this.loading = false;
        this.error = 'Could not connect to our internal servers.';
      }
    );
  }
  show: boolean = false;

  //A boolean that toggles whether the password should be shown or not
  inputTypes() {
    this.show = !this.show;
  }
}
