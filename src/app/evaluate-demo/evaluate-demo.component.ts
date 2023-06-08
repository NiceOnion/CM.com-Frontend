import {Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-demo',
  templateUrl: './evaluate-demo.component.html',
  styleUrls: ['./evaluate-demo.component.css']
})
export class EvaluateDemoComponent {
  @Input() demoType: string = "sms";
  flowId: number = 6;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((parameter) => {
      this.flowId = parameter['id'];
    })
  }
  goBackBtn(){
    this.router.navigate(["edit-question/" + this.flowId], {replaceUrl: false})
  }
}
