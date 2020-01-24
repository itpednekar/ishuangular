import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {



  constructor(public http:HttpClient) { }

 

  Check(userdetails) 
  {
    console.log(userdetails)
    return this.http.post("http://localhost:8080/Day1.1/user/login",userdetails);
  }
  listFeedback()
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listfeedback");
  }
  addAddress(userId, addr)
  {
    return this.http.put("http://localhost:8080/Day1.1/client/update/" + userId, addr);
  //return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }
  insertUser(user)
  {
     return this.http.post("http://localhost:8080/Day1.1/client/register",user);
  };
}
