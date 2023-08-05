import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  
  constructor(
    // injecting the store
    private store : Store <{counter :counterModel }>
  ){}

  onIncrement(){
    // dispatching the action
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(changeName({name : "Sourav's Counter App"}))
  }
}
