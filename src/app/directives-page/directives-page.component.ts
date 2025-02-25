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
  randomList=['apple','banana','orange']
  switchNumber=1
  isSpecial=true
  greenTextBoolean=false
  boldTextBoolean=false
  showHero=false

  currentClasses = {
    greenText: this.greenTextBoolean,
    boldText: this.boldTextBoolean,
  }

  updateCurrentClasses(){
    this.currentClasses = {
      greenText: this.greenTextBoolean,
      boldText: this.boldTextBoolean,
    }
  }

  incrementSwitchNumber(){
    this.switchNumber+=1
  }
  decrementSwitchNumber(){
    this.switchNumber-=1
  }
}
