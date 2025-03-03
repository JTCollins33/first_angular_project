import { Component, Input } from '@angular/core';

   @Component({
     selector: 'app-modal',
     template: `
       <div class="modal">
         <h1>{{title}}</h1>
         <p>Here is some text for the modal</p>
       </div>
     `
   })
   export class ModalComponent {
     @Input() title: string = "";

     close() {
       // Logic to close the modal
     }
   }