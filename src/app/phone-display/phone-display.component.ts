import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlgorithmService } from 'app/algorithm.service';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-phone-display',
  templateUrl: './phone-display.component.html',
  styleUrls: ['./phone-display.component.css', '../edit-question/edit-question.component.css']
})
export class PhoneDisplayComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() demoType: string = "sms";
  @Input() companyName: string = "Your company name";
  @Input() messageObjects: Array<{Type:string, Message: string}> = [];
  textMessage: string = "";
  messages: Message[] = [];
  flowId = 1;
  algorithmService: any;
  constructor(private apiService: ApiService,private route: ActivatedRoute) {    
    this.route.params.subscribe(params => {
      this.flowId = params['id'];
    });
    this.messageObjects.forEach(message => {
      this.messages.push(new Message(message.Type, message.Message))
    })
    this.apiService.getFlow(1, this.flowId).subscribe((data: any) => {
      console.log(JSON.parse(data.json));
      
      this.algorithmService = new AlgorithmService(JSON.parse(data.json).root);
    })
  }

  ngOnInit() {
  }

  addMessage() {
    if (this.textMessage != "") {
      this.messages.push(new Message("out", this.textMessage))
      this.algorithmService.FindSuitableSystemResponse(this.textMessage).forEach((data: any) => {
            this.messages.push(new Message("in", data.data.Content))
      })
      this.textMessage = "";
    }
  }

  useAlgorithm() {

  }
}

class Message {
  Type: string = "in";
  Content: string = "";

  constructor(type: string, content: string) {
    if (type == "in" || type == "out") {
      this.Type = type;
    } else {
      this.Type = "in";
    }
    this.Content = content;
  }
}
