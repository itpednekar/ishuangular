import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails = {"email":"", "password":"" };

  constructor(private authService : AuthService,
              private service:ClientService,
              private router : Router) 
    {         }


  ngOnInit() {
    
  }

 
  message = "";

  SignIn()
  {
    console.log("in signin");
    if (this.userdetails.email.length == 0) {
      alert('enter email');
    } else if (this.userdetails.password.length ==0) {
      alert('enter password');
    }
     this.authService.CheckUser(this.userdetails);
  }


}
