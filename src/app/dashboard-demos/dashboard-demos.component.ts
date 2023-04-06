import {Component, ElementRef, OnInit} from '@angular/core';
import {CardComponent} from "../card-component/card.component";
import {ApiService} from '../api.service';
import {MatDialog} from "@angular/material/dialog";
import {NewDemoComponent} from "../new-demo/new-demo.component";

@Component({
  selector: 'dashboard-demos-component',
  templateUrl: './dashboard-demos.component.html',
  styleUrls: ['./dashboard-demos.component.css']
})
export class DashboardDemosComponent implements OnInit {
  demos: Demo[] = [];

  constructor(private apiService: ApiService, private elRef: ElementRef, public dialog: MatDialog) {
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

  openPopUp(): void{
    const dialogRef = this.dialog.open(NewDemoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      new Demo(result)
    });
  }
}

class Demo {
  name: string = "";

  constructor(name:string) {
    this.name = name;
  }
}
