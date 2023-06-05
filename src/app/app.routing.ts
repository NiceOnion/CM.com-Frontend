import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {EditDemoComponent} from "./edit-demo/edit-demo.component";
import {DeleteDemoComponent}from "./delete-demo/delete-demo.component"
import { DashboardDemosComponent } from './dashboard-demos/dashboard-demos.component';
import {EditQuestionComponent} from "./edit-question/edit-question.component";
import {EvaluateDemoComponent} from "./evaluate-demo/evaluate-demo.component";
import {AuthGuard, LoginRedirect} from "./app.auth";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'edit-demo/:id', component: EditDemoComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
  { path: 'delete-demo/:id', component: DeleteDemoComponent },
  { path: 'dashboard-demos', component: DashboardDemosComponent },
  { path: 'edit-question/:id', component: EditQuestionComponent },
  { path: 'evaluate-demo/:id', component: EvaluateDemoComponent}
  // Add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
