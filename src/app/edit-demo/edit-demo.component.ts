import {Component} from '@angular/core';

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.component.html',
  styleUrls: ['./edit-demo.component.css']
})
export class EditDemoComponent {

}

class flowchart {
  Name: string = "";
  Items: flowchartItem[] = [];
  constructor(name: string) {
    this.Name = name;
  }
}
class flowchartItem {
  Name: string = "";
  Question: string = "";
  Responses: response[] = [];
  constructor(name: string) {

  }
}

class response {
  SearchWords: string[] = [];
  ResponseText: string = "";
  GoTo: flowchartItem | undefined;
}
