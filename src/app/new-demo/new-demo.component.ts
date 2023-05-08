import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-new-demo',
  templateUrl: './new-demo.component.html',
  styleUrls: ['./new-demo.component.css']
})
export class NewDemoComponent {

  demoName : string = "test demo";
  loggedInUserId = 1;

  constructor(public dialogRef: MatDialogRef<NewDemoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private ApiService: ApiService ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close();
    this.ApiService.addDemo(this.demoName, this.loggedInUserId);
  }
}
