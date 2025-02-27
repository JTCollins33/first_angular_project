import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnlessIsThreeDirective } from './unless-is-three.directive';
import { HighlightingDirective } from './highlighting.directive';

@Component({
  selector: 'app-directives-page',
  imports: [CommonModule, FormsModule, UnlessIsThreeDirective, HighlightingDirective],
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

  hiddenNumber=signal(0);

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

  incrementHiddenNumber(){
    this.hiddenNumber.update(n => n+1)
  }
  decrementHiddenNumber(){
    this.hiddenNumber.update(n=>n-1)
  }
}
