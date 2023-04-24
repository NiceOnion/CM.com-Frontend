import { Component } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import {ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';








@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.css']
  
})




export class DeletecomponentComponent {
  deleteSuccess = false; 
  deleteError = false; 
  deleteErrorMessage = ''; 
  demoname?:string;
  itemid2?: String; 
  object: any;
 

 
  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef,private router: Router ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
       const id = params['id'];
       this.itemid2 = id

     
    axios.get(`https://localhost:7258/api/Demo/Single/${this.itemid2}`)
        .then(response => {
          this.object = response.data;
          console.log(response.data);
          console.log(response.data.name);
          this.demoname=response.data.name

          
        })
        .catch(error => {
          console.error(error);
       });



      
    });
  }
  deleteItem() {
    const itemId = 'id'; 
  
     axios.put(`https://localhost:7258/api/Demo/${this.itemid2}`)
      .then( response => {
       //this.toastr.success('Demo has been successfully deleted', 'Success');

        console.log(` Item deleted successfully ${this.demoname} `, response);
        alert( `Item deleted successfully ${this.demoname} `);
    
        // this.snackBar.open('Demo deleted', 'Close', {
        //   duration: 2000,
        // });
        this.router.navigate(['/dashboard-demos']);

        this.deleteSuccess = true; // Set deleteSuccess to true to show success message
        this.deleteError = false; // Set deleteError to false to hide error message
      
      })
      .catch(error => {
        console.error('Failed to delete item:', error);
        alert(` Failed to delete demo ${this.demoname}`);
        // this.snackBar.open('Failed to delete demo', 'Close', {
        //   duration: 2000,
        // });
        this.deleteSuccess = false; // Set deleteSuccess to false to hide success message
        this.deleteError = true; // Set deleteError to true to show error message
        this.deleteErrorMessage = error.message; // Set the error message to display in the view
      });
   
  }
 
}
