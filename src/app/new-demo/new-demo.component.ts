import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {map, Observable, pluck} from "rxjs";

@Component({
  selector: 'app-new-demo',
  templateUrl: './new-demo.component.html',
  styleUrls: ['./new-demo.component.css']
})
export class NewDemoComponent implements OnInit{
  demoName : string = "test demo";
  loggedInUserId = 1;

  constructor(private router: Router, public dialogRef: MatDialogRef<NewDemoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private ApiService: ApiService ) {}

  ngOnInit() {
    if(sessionStorage.getItem("currentUserId") != null){
      this.loggedInUserId = Number(sessionStorage.getItem("currentUserId"));
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close();
    this.ApiService.addDemo(this.demoName, this.loggedInUserId).subscribe( data =>
      this.ApiService.getDemoByName(this.demoName).subscribe((demo: any) => {
        this.router.navigate(['/edit-demo/'+ demo.id])})) ;
  }
}
