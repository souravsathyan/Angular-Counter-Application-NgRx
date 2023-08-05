import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

// creating the actions
export const loadBlog = createAction('loadblog');

// actions that pass the parameters
export const addBlog = createAction(
  'addBlog',
  props<{ bloginput: BlogModel }>()
);

// update blog
export const updateBlog = createAction(
  'updateBlog',
  props<{ bloginput: BlogModel }>()
);

// delete blog
export const deleteBlog = createAction('deleteBlog', props<{ id: number }>());
