import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-new-demo',
  templateUrl: './new-demo.component.html',
  styleUrls: ['./new-demo.component.css']
})
export class NewDemoComponent {

  public demoName : string = "";

  constructor(public dialogRef: MatDialogRef<NewDemoComponent>, private ApiService: ApiService ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {

  }
}
