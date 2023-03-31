import {Component, ElementRef, OnInit} from '@angular/core';
import {CardComponent} from "../card-component/card.component";
import {ApiService} from '../api.service';

@Component({
  selector: 'dashboard-demos-component',
  templateUrl: './dashboard-demos.component.html',
  styleUrls: ['./dashboard-demos.component.css']
})
export class DashboardDemosComponent implements OnInit {
  demos: Demo[] = [];

  constructor(private apiService: ApiService, private elRef: ElementRef) {
    this.demos = [];
  }

  ngOnInit() {
    this.elRef.nativeElement.classList.add("w-100")

    this.apiService.getDemosOfUser(1).subscribe((data: any) => {
        this.demos = data;
      },
      error => {
        console.log(error)
      })
  }
}

class Demo {
  name: string = "";
}
