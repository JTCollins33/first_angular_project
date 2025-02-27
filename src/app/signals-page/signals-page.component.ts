import { Component, computed, signal, effect, inject } from '@angular/core';
import { SignalCounterService } from './signal-counter.service';

@Component({
  selector: 'app-signals-page',
  imports: [],
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.scss'
})
export class SignalsPageComponent {
  //everything for the first example
  count1 = signal(0);
  computedCount1 = computed(()=>{
    return this.count1()*10;
  });

  incrementCount1(){
    this.count1.update(count1 => count1 + 1);
  }

  //everything for the second example
  count2 = signal(0);
  count2Boolean=true;
  computerCount2DoesntUpdate = computed(()=>{
    if(this.count2Boolean){
      return 0;
    }
    else{
      return this.count2()*10;
    }
  });

  incrementCount2(){
    this.count2.update(count2 => count2 + 1);
  }

  //everything for the third example
  list1 = signal(['1', '2']);
  list1ComputedLength = computed(()=> {return this.list1().length})
  plainVariableList = this.list1().length
  pushOntoList1(){
    this.list1().push('3');
    this.plainVariableList=this.list1().length
  }

  //everything for the fourth example
  signalsCounterService = inject(SignalCounterService)



  constructor(){
    effect(()=>{
      console.log("count1: "+this.count1()+" and count2: "+this.count2())
    });
  }
  

  
}
