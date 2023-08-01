import { createAction } from "@ngrx/store";

// increment
export const increment = createAction ("increment")

//decrement
export const decrement = createAction ("decrement")

//reset
export const reset = createAction ('reset')