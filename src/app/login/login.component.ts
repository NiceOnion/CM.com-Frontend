import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;
  savePasswordBox: boolean = false;
  private data: any;
  constructor(private ApiService: ApiService, private router: Router, private cookieService: CookieService) {}
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
          this.data = data;
          this.cookieService.set('currentUserId', this.data)
          this.cookieService.set('currentUserName', this.name)
          this.loading = false;
          this.savePasswordBox = true;
        }
      },
      () => {
        this.loading = false;
        this.error = 'Could not connect to our internal servers.';
      }
    );
  }

  toHome(savePassword: boolean){
    if(savePassword){
      this.cookieService.set('currentUserId', this.data,30)
      this.cookieService.set('currentUserName', this.name,30)
    }
    this.router.navigate(['']);
  }

  show: boolean = false;

  //A boolean that toggles whether the password should be shown or not
  inputTypes() {
    this.show = !this.show;
  }
}
