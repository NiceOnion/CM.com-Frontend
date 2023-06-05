import { Component, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AlgorithmService } from 'app/algorithm.service';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css', '../phone-display/phone-display.component.css']
})
export class EditQuestionComponent {
  [x: string]: any;
  @Input() demoType: string = "sms"; //make this an api request
  flowId: number = 1;
  demoId: number = 1;
  algorithm?: any;
  companyName: string = "";

  messageObjects: Array<{ Type: string, Message: string }> = [];

  constructor(private elRef: ElementRef, private route: ActivatedRoute, private apiService: ApiService) {
    this.elRef.nativeElement.classList.add("w-100")
    this.flowId = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getFlow(this.demoId, this.flowId).subscribe((data: any) => {
      let json = JSON.parse(data.json);
      this.companyName = data.name;
      if (json.hasOwnProperty("root")) {
        this.messageObjects = [];
        json = json.root;
        let hasChild = true;
        this.algorithm = new AlgorithmService(json)
        while (hasChild) {
          console.log(json);
          
          this.messageObjects.push({ Type: json.data.Type, Message: json.data.Content })
          if (json.children.length == 0) hasChild = false;
          else json = json.children[0];
        }
      }
    }, error => {
      console.error(error);
    });    
  }

  testAlgorithm() {    
    console.log(this.algorithm.FindSuitableSystemResponse("i would like to hire and/or buy something"));
    console.log(this.algorithm.FindSuitableSystemResponse("i would like to have some info about something"));
  }
}

