import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role:any;
  flag:boolean = false;
  constructor(private clientService:ClientService) { 

    this.flag=localStorage['flag'];
    console.log("adasd"+this.flag);
  }

  ngOnInit() {
    document.body.classList.add('homebg');
this.role = localStorage['role'];
console.log("role "+this.role);
  }

}
