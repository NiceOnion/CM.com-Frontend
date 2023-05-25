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

  messages: Array<{Type: string, Message: string}> = [
    {Type: "in", Message: "Hello"},
    {Type: "out", Message: "Hello, How can I help you?"},
    {Type: "out", Message: "Or do you have an other question I can answer?"},
  ];
  constructor(private elRef: ElementRef, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.elRef.nativeElement.classList.add("w-100")
    this.flowId = Number(this.route.snapshot.paramMap.get('id'));
  }
}

