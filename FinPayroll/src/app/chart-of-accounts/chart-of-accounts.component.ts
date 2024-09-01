import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css']
})
export class ChartOfAccountsComponent {
  
  chartAccountsOnClick(){
    const posLevDisplay = document.getElementById('position-level');
    const posDisplay = document.getElementById('position-tab');

    if(posLevDisplay != null && posDisplay != null){
      posLevDisplay.style.display="flex";
      posDisplay.style.display="none";
    }
  }
  
  addOnClick(){
    const addDisplay = document.getElementById('addition');

    if(addDisplay != null){
      addDisplay.style.display="flex";
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
