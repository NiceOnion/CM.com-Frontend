import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from "@angular/material/dialog";
import { NewDemoComponent } from "../new-demo/new-demo.component";
import { CardComponent } from 'app/card-component/card.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'dashboard-demos-component',
  templateUrl: './dashboard-demos.component.html',
  styleUrls: ['./dashboard-demos.component.css']
})
export class DashboardDemosComponent implements OnInit {
  cardAmountPerPage: number = 6;
  pageIndex = 0;
  pageNationAmount: number = 0;
  pageNationAmountArchive: number = 0;
  Arr = Array;
  loggedInUserId = 1;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource: any[] = [];
  displayedItems: any[] = [];

  demos: Demo[] = [];
  archivedDemos: Demo[] = [];

  constructor(private apiService: ApiService, private elRef: ElementRef, public dialog: MatDialog, private cookieService: CookieService) {
    this.demos = [];
  }

  ngOnInit() {

    this.elRef.nativeElement.classList.add("w-100")
    if (this.cookieService.get('currentUserId') != "") {
      this.loggedInUserId = Number(this.cookieService.get('currentUserId'));
    }

    this.apiService.getDemosOfUser(this.loggedInUserId).subscribe((data: any) => {
      this.demos = data;
      this.initPageNation(data);
      this.pageNationAmount = Math.ceil(this.demos.length / this.cardAmountPerPage);
    },
      error => {
        console.log(error)
      })
    this.apiService.getArchivedDemosOfUser(this.loggedInUserId).subscribe((data: any) => {
      this.archivedDemos = data;
      this.pageNationAmountArchive = Math.ceil(this.archivedDemos.length / this.cardAmountPerPage);
    },
      error => {
        console.log(error)
      })
  }

  initPageNation(data: any) {
    this.dataSource = data; // Replace with your actual data retrieval method
    this.paginator.pageSize = this.cardAmountPerPage;
    this.paginator.pageIndex = this.pageIndex;
    this.paginator.length = this.dataSource.length;
    this.updateDisplayedItems();
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.displayedItems = this.dataSource.slice(startIndex, endIndex);
  }

  openPopUp(): void {
    const dialogRef = this.dialog.open(NewDemoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      new Demo(result, 0, "")
    });
  }
  reinstateDemo(id: number) {
    this.apiService.reinstateDemo(id).subscribe((data) => {
      window.location.reload();
    })
  }
  deleteDemo(id: number) {
    if (confirm("Are you sure you want to delete this demo?")) {
      this.apiService.fullDeleteDemo(id).subscribe((data) => {
        window.location.reload();
      })
    }
  }
}

class Demo {
  id: number = 0;
  name: string = "";
  description: string = "";

  constructor(name: string, id: number, description: string) {
    this.name = name;
    this.id = id;
    this.description = description;
  }
}
