import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
  title = 'Leave Type'

  public getReasonValue: any = [];
  public postReasonValue: any;
  public getIdReasonValue: any;
  public putReasonValue: any;

  constructor(private _LeaveTypeService: LeaveService)  {

  }

  ngOnInit(): void{
    this.getLeaveTypeReason();
  }

  getLeaveTypeReason(){
    this._LeaveTypeService.GetLeaveTypeService().subscribe((data)=>{
      this.getReasonValue = data;
    })
  }

  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  leaveTypeOnClick(){
    const posLevDisplay = document.getElementById('position-level');
    const posDisplay = document.getElementById('position-tab');

    if(posLevDisplay != null && posDisplay != null){
      posLevDisplay.style.display="flex";
      posDisplay.style.display="none";
    }
  }

  addOnClick(){
    const saveDisplay = document.getElementById('saveBtn');
    const cancelDisplay = document.getElementById('cancelBtn');

    if(saveDisplay != null && cancelDisplay != null){
      saveDisplay.style.display="flex";
      cancelDisplay.style.display="flex";
    }
  }

  saveCancelOnClick(){
    const saveDisplay = document.getElementById('saveBtn');
    const cancelDisplay = document.getElementById('cancelBtn');

    if(saveDisplay != null && cancelDisplay != null){
      saveDisplay.style.display="none";
      cancelDisplay.style.display="none";
    }
  }


}
