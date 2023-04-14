import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-display',
  templateUrl: './phone-display.component.html',
  styleUrls: ['./phone-display.component.css']
})
export class PhoneDisplayComponent {
  @Input() demoType: string = "sms";
}
