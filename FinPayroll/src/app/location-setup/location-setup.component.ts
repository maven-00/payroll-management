import { Component, OnInit } from '@angular/core';
import { LocationSetupService } from '../location-setup.service';

@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.component.html',
  styleUrls: ['./location-setup.component.css']
})
export class LocationSetupComponent implements OnInit {

  public getReasonValue: any = [];
  public postReasonValue: any;
  public getIdReasonValue: any;
  public putReasonValue: any;

  constructor(private _LocationSetupService: LocationSetupService) {

  }

  ngOnInit(): void{
    this.getLocationSetupReason();
  }

  getLocationSetupReason(){
    this._LocationSetupService.GetLocationSetupService().subscribe((data)=>{
      this.getReasonValue = data;
    })
  }

  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  locationSetupOnClick(){
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
