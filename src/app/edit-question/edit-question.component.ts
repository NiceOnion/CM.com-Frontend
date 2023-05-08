import {Component, ElementRef, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css', '../phone-display/phone-display.component.css']
})
export class EditQuestionComponent {
  [x: string]: any;
  @Input() demoType: string = "sms"; //make this an api request
  flowId: number = 1;

  messages: Message[] = [
    new Message("in", "Hello"),
    new Message("out", "Hello, how can i help you?\n"),
    new Message("out", "Or do you have a question I can answer.\n"),
  ];
  constructor(private elRef: ElementRef, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.elRef.nativeElement.classList.add("w-100")
    this.flowId = Number(this.route.snapshot.paramMap.get('id'));
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
