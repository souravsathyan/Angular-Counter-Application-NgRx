import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {

  constructor(private store : Store<{counter:{counter:number}}>){}

  counterInput! : number
  actionType = "add"

  onIncrement(){
    this.store.dispatch(customIncrement({value : +this.counterInput, action : this.actionType}))
  }
}
