import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, FormsModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  isVisible = true;
  randomList=['1','2','3']
  switchNumber=1

  incrementSwitchNumber(){
    this.switchNumber+=1
  }
  decrementSwitchNumber(){
    this.switchNumber-=1
  }
}
