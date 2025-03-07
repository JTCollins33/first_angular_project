import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observables-page',
  imports: [AsyncPipe],
  templateUrl: './observables-page.component.html',
  styleUrl: './observables-page.component.scss'
})
export class ObservablesPageComponent {
  //rxjs automatically sets up everything for observable
  numbers$ = of(1,2,3,4,5)
  valueEverySecond$ = interval(1000)

  //this is manually setting everything up for an observable
  myObservable = new Observable((observer) => {
    console.log("observable starts")
    setTimeout(()=>{observer.next("6")}, 1000)
    setTimeout(()=>{observer.next("7")}, 2000)
    setTimeout(()=>{observer.next("8")}, 3000)
    setTimeout(()=>{observer.next("9")}, 4000)

    //manually throw error; nothing after this will execute
    setTimeout(()=>{observer.error(new Error('something went wrong'))}, 5000)
    
    //this doesn't get emitted because of preceding error
    setTimeout(()=>{observer.next("10")}, 6000)

    //no value emitted after complete
    setTimeout(()=>{observer.complete()}, 7000)
  })

  ngOnInit(){
    this.numbers$.subscribe({
      next: (value) => {
        console.log("plain observable value: "+value)
      },
      error: (err)=>{
        console.error(err)
      },
      complete: () => {
        console.log("finished looping through basic observable")
      }
    })
    this.myObservable.subscribe({
      next: (value) => {
        console.log("myObservable value: "+value)
      },
      error: (err) => {
        //error won't be printed to screen without this
        console.error(err)
      },
      complete: () => {
        console.log("completed streaming myObservable")
      }
    })
  }
}
