import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessIsThree]'
})
export class UnlessIsThreeDirective {
  @Input() set appUnlessIsThree(currentNumber: number){
    if(currentNumber===3){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else{
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

}
