import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success'
export const LOAD_BLOG = '[blog page] load blog'

// creating the actions
export const loadBlog = createAction(LOAD_BLOG);

// effect
export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS, props <{blogList : BlogModel [] }> ())

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
