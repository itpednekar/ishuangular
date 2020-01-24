import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {

  location : any
  
  constructor(private adminService : AdminService,
    private router : Router) { }

  ngOnInit() {
    let observableResult = this.adminService.listLocations()
    observableResult.subscribe((data)=>{
      console.log(data)
      this.location = data;
    })
  }

}
