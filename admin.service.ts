import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  listVenueCities()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listvenuecity");
  }
  insertVenue(venue)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertvenuecity",venue);
  }
  listLocations()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listlocation")
  }
  insertLocation(venuCityId, location)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertlocation/"+venuCityId, location);
  }
  listFoodSubMenu()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodsubmenu")
  }
}
