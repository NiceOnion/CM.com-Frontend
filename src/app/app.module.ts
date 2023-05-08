


import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { EditDemoComponent } from './edit-demo/edit-demo.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { PhoneDisplayComponent } from './phone-display/phone-display.component';
import { EditFlowElementComponent } from './edit-user-flow-element/edit-flow-element.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';

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
    DeletecomponentComponent
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
