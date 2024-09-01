import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  
  employeeListOnClick(){
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
