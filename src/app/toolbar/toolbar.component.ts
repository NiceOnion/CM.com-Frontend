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
  getName() {
    return localStorage.getItem('currentUserName');
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
