import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/api.service';
import axios from 'axios';

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
  quesitons: Question[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.demo.Id = params['id'];
    });
    this.apiService.getDemo(this.demo.Id).subscribe((data: any) => {
      this.demo.Name = this.name = data.name;
      this.demo.Description = this.description = data.description;
      this.demo.Visibility = this.visibility = data.visibility;
    });
  }
  saveDemo() {
    this.demo.Name = this.name;
    this.demo.Description = this.description;
    this.demo.Visibility = this.visibility;
    this.apiService.editDemo(this.demo.Id, this.demo.Name, this.demo.Description, this.demo.Visibility).subscribe((data:any) =>{
      if(data == true){
        alert("Saved successfully!")
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

class Question {
  Id: number = 1;
  Name?: string;
}