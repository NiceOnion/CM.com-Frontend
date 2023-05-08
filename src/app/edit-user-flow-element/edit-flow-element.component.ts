import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-flow-element',
  templateUrl: './edit-flow-element.component.html',
  styleUrls: ['./edit-flow-element.component.css']
})
export class EditFlowElementComponent {
  @Input() type: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditFlowElementComponent>) {
  }

  Title: string = this.data.data.Type == "user" ? "User Input" : "System response"
  placeholder: string = this.data.data.Type == "user" ? "Words to look for" : "System response"
  content = this.data.data.Content;
  prevContent = this.data.data.Content;

  cancel(): void {
    this.dialogRef.close(this.prevContent);
  }

  save() {
    this.dialogRef.close(this.content);
    //api call to save
  }

  ngOnInit() {
    console.log(this.data);
  }
}
