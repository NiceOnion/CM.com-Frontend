import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card-component/card.component';
import { DashboardDemosComponent } from './dashboard-demos/dashboard-demos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardDemosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
