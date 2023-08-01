import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit{

  constructor(
    // counter is the registered name of the reducer
    private store: Store < {counter: {counter : number}} >
  ){}
  counterDisplay : number
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter
    })
  }
  
}
