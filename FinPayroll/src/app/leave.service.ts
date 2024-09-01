import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private _refreshrequired: any;

  constructor(private http: HttpClient) { }

  LeaveTypeUrl = "http://hrmis-ojt-api.myblukuartz.com/api/LeaveType";

  get RefreshRequired(){
    return this._refreshrequired;
  }

  GetLeaveTypeService(){
    return this.http.get(this.LeaveTypeUrl);
  }
}
