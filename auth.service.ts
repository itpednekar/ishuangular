import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientService } from './client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  client : any;

  constructor(private router : Router,public service : ClientService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }

  IsLoggedIn()
  {
     if(window.sessionStorage.getItem("active")!=null && 
        window.sessionStorage.getItem("active")=="1")
        {
          return true;
        }
        return false;
  }
  CheckUser(userdetails) 
  {
    console.log("in checkuser");
    let observableResult = this.service.Check(userdetails);
    observableResult.subscribe((result)=>{
      this.client = result;
      console.log(this.client);
      console.log("role"+this.client.role);
      if(this.client.role == 'CLIENT')
      {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('flag','true');
        this.router.navigate(['/mydetails']);
      }
      else if(this.client.role == 'ADMIN')
      {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('flag','true');
        this.router.navigate(['/home']);
      }
      else if(this.client.role == 'MANAGER')
      {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('flag','true');
        this.router.navigate(['/home']);
      }
      localStorage.setItem('myDetails', JSON.stringify(this.client));
      return true;
    })
    return false;
  }

  isClient()
  {
      console.log(this.client.role)
       if(window.sessionStorage.getItem("active")!= null
       && window.sessionStorage.getItem("active")=='1'
       && this.client.role == "CLIENT")
       {
         return true;
       }  
       else
         return false;
  }

  isAdmin()
  {
       if(window.sessionStorage.getItem("active")!= null
       && window.sessionStorage.getItem("active")=='1'
       && this.client.role == "ADMIN")
       {
        return true;
       }  
       else
         return false;
  }

  isManager()
  {
       if(window.sessionStorage.getItem("active")!= null
       && window.sessionStorage.getItem("active")=='1'
       && this.client.role == "MANAGER")
       {
        return true;
       }  
       else
         return false;
  }
  
  getClinetInfo()
  {
    return this.client;
  }
  
}
