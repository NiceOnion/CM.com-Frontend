import {Component, ElementRef, Input, TemplateRef, ViewChild, OnInit} from '@angular/core';
import {NgFlowchartCanvasDirective, NgFlowchartStepComponent, NgFlowchartStepRegistry} from "@joelwenzel/ng-flowchart";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EditFlowElementComponent} from "../edit-user-flow-element/edit-flow-element.component";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})

export class FlowchartComponent {
  constructor(private apiService: ApiService, private stepRegistry: NgFlowchartStepRegistry, public dialog: MatDialog, private route: ActivatedRoute) {
  }

  @Input() demoType: string = "sms";
  @Input() demoId: number = 1;
  @ViewChild(NgFlowchartCanvasDirective)
  canvasElement!: NgFlowchartCanvasDirective;
  @ViewChild('flowchartItemStepContent')
  flowchartItemStepContent!: TemplateRef<any>;
  json: any;
  id: number = 1;

  flowchartElements: flowchartElement[] = [
    new flowchartElement("User Input", "user", ""),
    new flowchartElement("System response", "system", ""),
  ]

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  async ngAfterViewInit() {
    await this.apiService.getFlow(this.demoId, this.id).subscribe((data: any) => {
      this.json = JSON.parse(data.json);      
      this.updateFlowchart()
    }, error => {
      console.log(error)
    });
  }

  deleteFlowchartItem(id: number) {
    this.canvasElement.getFlow().getStep(id).destroy(true, true);
  }

  saveFlowchart() {
    let json = this.canvasElement.getFlow().toJSON(0);
    this.apiService.updateFlow(this.id, this.id, "", "", this.canvasElement.getFlow().toJSON(0)).subscribe((data:any) =>{
      if (data == true) {
        alert("Saved succesfully!")
      }
    }, error => {
      console.log(this)
      console.error(error)
    });
  }

  updateFlowchart() {
    this.stepRegistry.registerStep("flowchartStepContent", this.flowchartItemStepContent)
    let jsonParse = this.json

    this.canvasElement.getFlow().upload(jsonParse);
  }

  onFlowchartEdit(id: number, flowItemData: any) {
    const dialogRef = this.dialog.open(EditFlowElementComponent, {
      data: flowItemData
    });
    dialogRef.afterClosed().subscribe(r => this.canvasElement.getFlow().getStep(id).data.Content = r);
    //edit phone display
  }
}

class flowchart {
  Name: string = "";

  constructor(name: string) {
    this.Name = name;
  }
}

class flowchartElement {
  Title: string = "";
  Data: any;

  constructor(title: string, type: string, content: string) {
    this.Title = title;
    this.Data = {
      Title: title,
      Type: type,
      Content: content,
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
