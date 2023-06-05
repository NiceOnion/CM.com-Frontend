import { Component, Input, OnInit } from '@angular/core';

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
  constructor() {    
    this.messageObjects.forEach(message => {
      this.messages.push(new Message(message.Type, message.Message))
    })    
  }

  ngOnInit() {
  }
  addMessage() {
    if (this.textMessage != "") {
      this.messages.push(new Message("out", this.textMessage))
      this.textMessage = "";
    }
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
