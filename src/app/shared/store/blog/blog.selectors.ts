import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./blog.model";

// creating a selector
// <blogs> which defines the structure of the selector
// blog is the name of the feature

const getBlogState = createFeatureSelector <Blogs> ('blog');

export const getBlog = createSelector (getBlogState, (state)=>{
    return state.blogList;
})

export const getBlogById = (blogId : number) => createSelector(getBlogState,(state)=>{
    return state.blogList.find((blog:BlogModel) => blog.id === blogId) as BlogModel
})

export const getBlogInfo = createSelector(getBlogState, (state)=>{
    return state
})