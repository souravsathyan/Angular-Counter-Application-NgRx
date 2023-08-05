import { blogReducer } from "../blog/blog.reducers";
import { counterReducer } from "../counter.reducer";

export const AppState = {
    counter : counterReducer,
    blog : blogReducer
}