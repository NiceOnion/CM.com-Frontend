import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() header: boolean = true;
  @Input() footer: boolean = false;
  @Input() image: string = "";
}
