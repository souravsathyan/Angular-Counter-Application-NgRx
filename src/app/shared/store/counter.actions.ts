import { createAction, props } from "@ngrx/store";

// increment
export const increment = createAction ("increment")

//decrement
export const decrement = createAction ("decrement")

//reset
export const reset = createAction ('reset')

//customIncrement
export const customIncrement = createAction("customIncrement", props < { value : number, action : string } >())
