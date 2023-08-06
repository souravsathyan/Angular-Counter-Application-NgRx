import { createReducer, on } from '@ngrx/store';
import { BlogState } from './blog.state';
import { addBlog, addBlogSuccess, deleteBlog, loadBlog, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from './blog.actions';
import { BlogModel } from './blog.model';

// reducer that accept the current state and the new state that passed through the action
const _blogReducer = createReducer(
  BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  
  on(loadBlogSuccess, (state, action)=>{
    return {
      ...state,
      blogList : [...action.blogList],
      ErrorMEssage : ''
    }
  }),

  on(loadBlogFail, (state, action)=>{
    return {
      ...state,
      blogList : [],
      ErrorMEssage : action.ErrorText
    }
  }),
  // on(addBlog, (state, action)=>{
  //   const _blog = {...action.bloginput}
  //   _blog.id = state.blogList.length+1
  //   return {
  //     ...state,
  //     blogList : [...state.blogList, _blog]
  //   }
  // }),
  on(addBlogSuccess, (state, action)=>{
    console.log('it is the state : ',state,"it is the action : ",action)
    const _blog = {...action.bloginput}
    return {
      ...state,
      blogList : [...state.blogList, _blog]
    }
  }),
  on(updateBlogSuccess, (state, action)=>{
    const _blog = {...action.bloginput}
    const updatedBlog = state.blogList.map(blog=>{
      return _blog.id === blog.id ? _blog : blog
    })
    return {
      ...state,
      blogList : updatedBlog
    }
  }),
  on(deleteBlog, (state, action)=>{
    const updatedBlog = state.blogList.filter((data:BlogModel)=>{
      return data.id !== action.id
    })
    return {
      ...state,
      blogList : updatedBlog
    }
  })
);

export function blogReducer(state : any, action : any){
    return _blogReducer(state, action)
}
