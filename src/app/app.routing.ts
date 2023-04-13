import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-page', component: TestPageComponent },
  // Add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
