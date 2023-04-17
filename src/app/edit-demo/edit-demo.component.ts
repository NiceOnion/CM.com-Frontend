import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.component.html',
  styleUrls: ['./edit-demo.component.css']
})
export class EditDemoComponent {
  question!: string;
  response!: string;
  wordsToLook!: string;
  onSubmit() {
    console.log('Question:', this.question);
    console.log('Response:', this.response);
    console.log('Words to look:', this.wordsToLook);
  }
}
