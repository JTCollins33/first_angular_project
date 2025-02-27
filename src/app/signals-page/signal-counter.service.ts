import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalCounterService {

  private counterSignal = signal(0);

  readonly counter = this.counterSignal.asReadonly();

  incrementCounter(){
    this.counterSignal.update((v) => v+1)
  }
}
