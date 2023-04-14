import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent {
  @Input() demoType: string = "whatsapp"; //make this an api key
  constructor(private elRef: ElementRef) {  }
  ngOnInit() {
    this.elRef.nativeElement.classList.add("w-100")
  }
}
