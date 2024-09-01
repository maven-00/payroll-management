import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationSetupService {
  private _refreshrequired: any;

  constructor(private http: HttpClient) { }

  LocationSetupUrl = "http://hrmis-ojt-api.myblukuartz.com/api/Location"

  get RefreshRequired(){
    return this._refreshrequired;
  }

  GetLocationSetupService(){
    return this.http.get(this.LocationSetupUrl);
  }
}
