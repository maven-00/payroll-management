import { Component } from '@angular/core';
import { LateservicesService } from '../lateservices.service';

@Component({
  selector: 'app-late-policy',
  templateUrl: './late-policy.component.html',
  styleUrls: ['./late-policy.component.css']
})
export class LatePolicyComponent {
  title = 'Late Policy'

  public getLateReasonValue: any = [];
  public getLatePolicyDetailsReasonValue: any = [];
  public postReasonValue: any;
  public getIdReasonValue: any;
  public putReasonValue: any;

  constructor(private _LatePolicyService: LateservicesService) {

  }

  ngOnInit(): void{
    this.getLatePolicyReason();
    this.getLatePolicyDetailsReason();
  }

  getLatePolicyReason(){
    this._LatePolicyService.GetLatePolicyService().subscribe((data)=>{
      this.getLateReasonValue = data;
    })
  }

  getLatePolicyDetailsReason(){
    this. _LatePolicyService.GetLatePolicyDetailsService().subscribe((data)=>{
      this.getLatePolicyDetailsReasonValue = data;
    })
  }


  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  latePolicyOnClick(){
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
