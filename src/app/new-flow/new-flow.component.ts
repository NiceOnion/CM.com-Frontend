import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-new-flow',
  templateUrl: './new-flow.component.html',
  styleUrls: ['./new-flow.component.css']
})
export class NewFlowComponent {
  flowName : string = "New Flow";
  constructor(public dialogRef: MatDialogRef<NewFlowComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private ApiService: ApiService ) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(this.flowName);
  }
}
