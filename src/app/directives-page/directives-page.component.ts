import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-page.component.html',
  styleUrl: './directives-page.component.scss'
})
export class DirectivesPageComponent {
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
