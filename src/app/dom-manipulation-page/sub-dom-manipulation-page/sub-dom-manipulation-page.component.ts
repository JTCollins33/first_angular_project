import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sub-dom-manipulation-page',
  imports: [],
  templateUrl: './sub-dom-manipulation-page.component.html',
  styleUrl: './sub-dom-manipulation-page.component.scss'
})
export class SubDomManipulationPageComponent {
  subChildValue = signal(1)

  makeALoudNoise(){
    window.alert("This is the child component")
  }
}
