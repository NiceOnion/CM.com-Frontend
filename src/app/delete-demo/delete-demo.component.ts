import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-demo',
  templateUrl: './delete-demo.component.html',
  styleUrls: ['./delete-demo.component.css']

})
export class DeleteDemoComponent {
  demoId: number = 1;
  deleteSuccess = false;
  deleteError = false;
  deleteErrorMessage = '';
  demoName: string = "";

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router, private apiService: ApiService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.demoId = params['id'];
    });
    this.apiService.getDemo(this.demoId).subscribe((data: any) => {
      this.demoName = data.name;
    }, error => {
      console.error(error);
    });
  }

  deleteItem() {
    const itemId = 'id';
    this.apiService.deleteDemo(this.demoId).subscribe((data: any) => {
      console.log(data);

      window.location.href = "/";
    })
  }
}
