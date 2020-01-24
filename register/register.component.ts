import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message : string;

  constructor(private router : Router,
              private clientService : ClientService) { }

  ngOnInit() {
  }

  onRegister(entireData)
  {
    console.log("inside onRegister");
    let user = entireData.form.value;
    console.log(user);

    let observableResult=
        this.clientService.insertUser(user)

    observableResult.subscribe((result: any)=>{
      console.log("result "+result);

      if(result.name == "ValidationError")
      {
        this.message = "Data is invalid!";
      }
      else{
        this.message = "Record Added!";
      }
    });
  this.router.navigate(['login']);
       
  }

}
