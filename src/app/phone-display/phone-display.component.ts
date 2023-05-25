import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-display',
  templateUrl: './phone-display.component.html',
  styleUrls: ['./phone-display.component.css', '../edit-question/edit-question.component.css']
})
export class PhoneDisplayComponent {
  @Input() disabled: boolean = false;
  @Input() demoType: string = "sms";
  @Input() messageObjects: Array<{ Type: string, Message: string }> = []
  textMessage: string = "";
  messages: Message[] = [];

  ngOnInit() {
    this.messageObjects.forEach(message => {
      this.messages.push(new Message(message.Type, message.Message))
    })
  }
  addMessage() {
    if (this.textMessage != "") {
      this.messages.push(new Message("in", this.textMessage))
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