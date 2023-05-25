
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { NewFlowComponent } from 'app/new-flow/new-flow.component';

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.component.html',
  styleUrls: ['./edit-demo.component.css']
})
export class EditDemoComponent {
  demo = new Demo(1);
  name?: string;
  description?: string;
  visibility?: boolean;
  flows: Flow[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.demo.Id = params['id'];
    });

    this.apiService.getDemo(this.demo.Id).subscribe((data: any) => {
      this.demo.Name = this.name = data.name;
      this.demo.Description = this.description = data.description;
      this.demo.Visibility = this.visibility = data.visibility;
    });
    this.apiService.getFlowsOfDemo(this.demo.Id).subscribe((data: any) => {
      data.forEach((element: any) => {
        this.flows.push(new Flow(element.id, element.name))
      });
    })
  }
  saveDemo() {
    this.demo.Name = this.name;
    this.demo.Description = this.description;
    this.demo.Visibility = this.visibility;
    this.apiService.editDemo(this.demo.Id, this.demo.Name, this.demo.Description, this.demo.Visibility).subscribe((data: any) => {
      if (data == true) {
        alert("Saved successfully!")
      }
    });
  }
  createNewFlow() {
    const dialogRef = this.dialog.open(NewFlowComponent);

    dialogRef.afterClosed().subscribe((result) => {
      
      if (result != false) {
        console.log("result = " + result);
        this.apiService.addFlow(this.demo.Id, result).subscribe((data:any ) => {
          window.location.reload();
        })
      }
    });
  }
}
class Demo {
  Id: number = 1;
  Name?: string;
  Description?: string;
  Visibility?: boolean;
  constructor(id: number) {
    this.Id = id;
  }
}

class Flow {
  Id: number = 1;
  Name: string;
  constructor(id: number, name: string) {
    this.Id = id;
    this.Name = name;
  }
}
