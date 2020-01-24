import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-venue',
  templateUrl: './insert-venue.component.html',
  styleUrls: ['./insert-venue.component.css']
})
export class InsertVenueComponent implements OnInit {

  constructor(private router : Router,
    private adminService : AdminService) { }

  ngOnInit() {
  }

  onInsert(entireData)
  {
    console.log("Inside onInsert()")
    let venue = entireData.form.value
    console.log(venue)
    let observableResult = this.adminService.insertVenue(venue);
    observableResult.subscribe((data)=>{
    console.log(data)
  })
  }
}
