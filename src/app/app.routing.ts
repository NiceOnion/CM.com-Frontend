import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {EditDemoComponent} from "./edit-demo/edit-demo.component";
import {DeletecomponentComponent}from "./deletecomponent/deletecomponent.component"
import { DashboardDemosComponent } from './dashboard-demos/dashboard-demos.component';
import {EditQuestionComponent} from "./edit-question/edit-question.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-demo/:id', component: EditDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deletecomponent/:id', component: DeletecomponentComponent },
  { path: 'dashboard-demos', component: DashboardDemosComponent },
  { path: 'edit-question/:id', component: EditQuestionComponent },
  // Add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
