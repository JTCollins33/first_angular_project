import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert',
    styleUrl: './dom-manipulation-page.component.scss',
    template: `
      <div class="alert alert-{{type}}">
        <ng-content></ng-content>
      </div>
    `
  })
  export class AlertComponent {
    @Input() type!: string;
  }