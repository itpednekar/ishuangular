import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-venue-city',
  templateUrl: './list-venue-city.component.html',
  styleUrls: ['./list-venue-city.component.css']
})
export class ListVenueCityComponent implements OnInit {

  venueCity : any
  
  constructor(private adminService : AdminService,
              private router : Router) { }

  ngOnInit() {
    let observableResult = this.adminService.listVenueCities()
    observableResult.subscribe((data)=>{
      console.log(data)
      this.venueCity = data
    })
  }
  

}
