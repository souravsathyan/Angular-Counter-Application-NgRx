import { createAction, props } from "@ngrx/store";

// increment
export const increment = createAction ("increment")

//decrement
export const decrement = createAction ("decrement")

//reset
export const reset = createAction ('reset')

//customIncrement
export const customIncrement = createAction("customIncrement", props < { value : number, action : string } >())

// changing name
export const changeName = createAction("changeName", props < { name : string } >())

