import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LateservicesService {
  private _refreshrequired: any;

  constructor(private http: HttpClient) { }

  LatePolicyUrl = "http://hrmis-ojt-api.myblukuartz.com/api/LatePolicy"
  LatePolicyDetailsUrl = "http://hrmis-ojt-api.myblukuartz.com/api/LatePolicyDetails"

  get RefreshRequired(){
    return this._refreshrequired;
  }
  
  GetLatePolicyService(){
    return this.http.get(this.LatePolicyUrl);
  }

  GetLatePolicyDetailsService(){
    return this.http.get(this.LatePolicyDetailsUrl);
  }
}
