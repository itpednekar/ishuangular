import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  constructor( private authService : AuthService,
               private clientService : ClientService,
               private router : Router) { }

  myDetails : {
    "userId": "",
    "name": "",
    "email": "",
    "password": "",
    "confirmPassword": "",
    "role": "",
    "mobNo": ""
  }

  ngOnInit() {
    this.myDetails = this.authService.getClinetInfo();
    console.log(this.myDetails) 
  }

  onAdd(entireData)
  {
    console.log("In onAdd() method"); 
    let addr = entireData.form.value;
    console.log(addr);
    let observableResult =  this.clientService.addAddress(this.myDetails.userId, addr );
    observableResult.subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/bookanevent']);
    })
  }

}
