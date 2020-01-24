import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-food-sub-menu',
  templateUrl: './list-food-sub-menu.component.html',
  styleUrls: ['./list-food-sub-menu.component.css']
})
export class ListFoodSubMenuComponent implements OnInit {


  foodSubMenu : any

  constructor(private adminService : AdminService,
    private router : Router) { }

  ngOnInit() {
    let observableResult = this.adminService.listFoodSubMenu()
    observableResult.subscribe((data)=>{
      console.log(data)
      this.foodSubMenu = data;
    })
  }



}
