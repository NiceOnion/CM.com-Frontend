import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {EditDemoComponent} from "./edit-demo/edit-demo.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-demo/:id', component: EditDemoComponent },
  { path: 'login', component: LoginComponent },
  // Add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
