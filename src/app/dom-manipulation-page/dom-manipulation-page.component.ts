import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation-page',
  imports: [],
  templateUrl: './dom-manipulation-page.component.html',
  styleUrl: './dom-manipulation-page.component.scss'
})
export class DomManipulationPageComponent {
  @ViewChild('container') container!: ElementRef;
  @ViewChild('textElement') textElement!: ElementRef;
  @ViewChild('h4Element') h4Element!: ElementRef;
  private createdElement!: HTMLElement;

  createdElementsList: HTMLElement[] = []

  constructor(private renderer: Renderer2) {}

  ngOnInit(){
    console.log("View Child on initialization: "+this.container)
  }

  ngAfterViewInit(){
    console.log("View Child after view initialization: "+this.container.nativeElement)
  }

  addElement(){
    this.createdElement = this.renderer.createElement('p');
    const text = this.renderer.createText('This is a dynamically added element')
    this.renderer.appendChild(this.createdElement, text)
    this.renderer.appendChild(this.container.nativeElement, this.createdElement)
    this.createdElementsList.push(this.createdElement)
  }

  removeElement(){
    if (this.createdElement) {
      this.renderer.removeChild(this.container.nativeElement, this.createdElement);
      const nextHTMLElement = this.createdElementsList.pop()
      if(nextHTMLElement){
        this.createdElement = nextHTMLElement
      }
    }
  }

  applyStyles() {
    this.renderer.setStyle(this.textElement.nativeElement, 'color', 'blue')
    this.renderer.setStyle(this.textElement.nativeElement, 'font-weight', 'bold')
  }
  applyH4Styles() {
    this.renderer.setStyle(this.h4Element.nativeElement, 'color', 'green')
    this.renderer.setStyle(this.h4Element.nativeElement, 'font-weight', 'italics')
  }

}
