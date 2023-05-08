import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CardComponent } from './card-component/card.component';
import { DashboardDemosComponent } from './dashboard-demos/dashboard-demos.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDemoComponent } from './new-demo/new-demo.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditDemoComponent } from './edit-demo/edit-demo.component';
import { NgFlowchartModule } from "@joelwenzel/ng-flowchart";
import { FlowchartComponent } from './flowchart/flowchart.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { PhoneDisplayComponent } from './phone-display/phone-display.component';
import { EditFlowElementComponent } from './edit-user-flow-element/edit-flow-element.component';
import { DeleteDemoComponent } from './delete-demo/delete-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardDemosComponent,
    ToolbarComponent,
    NewDemoComponent,
    HomeComponent,
    LoginComponent,
    EditDemoComponent,
    DeleteDemoComponent,
    FlowchartComponent,
    EditQuestionComponent,
    PhoneDisplayComponent,
    EditFlowElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    NgFlowchartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
