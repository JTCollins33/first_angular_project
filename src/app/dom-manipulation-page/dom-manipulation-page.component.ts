import { Component, ElementRef, Renderer2, signal, effect, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SubDomManipulationPageComponent } from './sub-dom-manipulation-page/sub-dom-manipulation-page.component';
import { ModalComponent } from './modal.component';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dom-manipulation-page',
  imports: [SubDomManipulationPageComponent, AlertComponent, CommonModule],
  templateUrl: './dom-manipulation-page.component.html',
  styleUrl: './dom-manipulation-page.component.scss'
})
export class DomManipulationPageComponent {
  constructor(private renderer: Renderer2) {
    effect: (()=>{
      const container7IsShowing = this.showContainer7();
      console.log(container7IsShowing)
    });
  }

  ngOnInit(){
    this.viewChildExample1String.update(s => s + "View Child on initialization (ngOnInit): "+this.container)
  }

  ngAfterViewInit(){
    this.viewChildExample1String.update(s => s+" ----- View Child after view initialization (ngAfterViewInit): "+this.container.nativeElement)
    this.viewChildrenOutputString.set("Example #3: ViewChildFromComponent = "+this.viewChildFromComponent+" <-----> ViewChildFromIdentifier = "+this.viewChildFromIdentifier+" <-----> unreachable h5 element = "+this.viewChildUnreachableElement)
  }

  //first example
  @ViewChild('container') container!: ElementRef;
  private createdElement!: HTMLElement;
  createdElementsList: HTMLElement[] = []
  viewChildExample1String = signal('')

  
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

  //second example
  @ViewChild('textElement') textElement!: ElementRef;
  @ViewChild('h4Element') h4Element!: ElementRef;

  applyStyles() {
    this.renderer.setStyle(this.textElement.nativeElement, 'color', 'blue')
    this.renderer.setStyle(this.textElement.nativeElement, 'font-weight', 'bold')
  }
  applyH4Styles() {
    this.renderer.setStyle(this.h4Element.nativeElement, 'color', 'green')
    this.renderer.setStyle(this.h4Element.nativeElement, 'font-weight', 'italics')
  }


  //third example
  @ViewChild(SubDomManipulationPageComponent)
  viewChildFromComponent!: SubDomManipulationPageComponent

  @ViewChild('subChild')
  viewChildFromIdentifier!: SubDomManipulationPageComponent

  //unreachable because ViewChild can only go one layer deep
  //(cannot find elements which are part of children)
  @ViewChild('h5Element')
  viewChildUnreachableElement!: ElementRef

  viewChildrenOutputString = signal('')


  //fourth example
  @ViewChild('subChild2')
  subChild2!: SubDomManipulationPageComponent
  callChildComponentMethod(){
    this.subChild2.makeALoudNoise()
  }

  //fifth example
  @ViewChild('vcr1', {read: ViewContainerRef}) vcr1!: ViewContainerRef

  loadModal(){
    const modalComponentRef = this.vcr1.createComponent(ModalComponent)
    modalComponentRef.instance.title = 'Dynamic Modal'
  }

  closeModal(){
    this.vcr1.clear();
  }

  //seventh example
  showContainer7 = signal(false);
  @ViewChild('containerNumber7', {read: ViewContainerRef}) viewContainerRef7!: ViewContainerRef
  @ViewChild('container7Template', {read: TemplateRef}) templateRef7!: TemplateRef<any>

  toggleShowContainer7(){
    this.showContainer7.set(!this.showContainer7())
  }

  addToContainer7(){
    if(this.viewContainerRef7){
      this.viewContainerRef7.createEmbeddedView(this.templateRef7)
    } else {
      window.alert("Error: Cannot add to container 7 because it is undefined (part of ng-container which is set to false and thus not part of the DOM). To fix this, set containerViewable to true")
    }
  }
}
