import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-demo',
  templateUrl: './evaluate-demo.component.html',
  styleUrls: ['./evaluate-demo.component.css']
})
export class EvaluateDemoComponent {
  @Input() demoType: string = "sms";
  flowId: number = 6;
  constructor(private router: Router) {
  }
  goBackBtn(){
    this.router.navigate(["edit-question/" + this.flowId], {replaceUrl: true})
  }
}
