import {Component, Input} from '@angular/core';
import {EditQuestionComponent} from "../edit-question/edit-question.component";

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent {
  @Input() demoType: string = "sms";

  flowchartElements: flowchartElement[] = [
    new flowchartElement("User Input"),
    new flowchartElement("System response")
  ]
}

class flowchart {
  Name: string = "";
  Items: flowchartItem[] = [];

  constructor(name: string) {
    this.Name = name;
  }
}

class flowchartElement {
  Title: string = "";
  Data: any;

  constructor(title: string) {
    this.Title = title;
    this.Data = {
      Title: title
    }
  }
}

class flowchartItem {
  Name: string = "";
  Question: string = "";
  Responses: response[] = [];

  constructor(name: string) {
  this.Name = name;
  }
}

class response {
  SearchWords: string[] = [];
  ResponseText: string = "";
  GoTo: flowchartItem | undefined;
}
