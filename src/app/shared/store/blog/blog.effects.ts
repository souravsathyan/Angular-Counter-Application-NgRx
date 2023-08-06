import { Injectable } from "@angular/core";
import { MasterService } from "../../master.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG, addBlog, addBlogSuccess, deleteBlog, deleteBlogSuccess, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, of} from "rxjs";
import { BlogModel } from "./blog.model";

@Injectable()
export class BlogEffects {
    
    constructor(
        private actions$ : Actions,
        private services : MasterService
    ){}
    // load blog effect
    _blog = createEffect(()=>
        this.actions$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action)=>{
                return this.services.getAllBlogs().pipe(
                    map((data)=>{
                        return loadBlogSuccess({blogList: data})
                    }),
                    catchError((_error)=> of(loadBlogFail({ErrorText:_error.message})))
                )
            })
        )
    )
    // add blog effect
    _AddBlog = createEffect(()=>
        this.actions$.pipe(
            ofType(addBlog),
            exhaustMap(action => {
                return this.services.createBlog(action.bloginput).pipe(
                    map((data)=>{
                        console.log('12323')
                        return addBlogSuccess({bloginput:data as BlogModel})
                    }),
                    catchError((_error)=> of(loadBlogFail({ErrorText:_error.message})))
                )
            })
        )
    )

    // UPDATE BLOG EFFECT
    _updateBlog = createEffect(()=>
    this.actions$.pipe(
        ofType(updateBlog),
        exhaustMap(action=>{
            console.log(action)
            return this.services.updateBlog(action.bloginput).pipe(
                map(()=>{
                    return updateBlogSuccess({bloginput:action.bloginput})
                }),
                catchError((_error)=> of(loadBlogFail({ErrorText:_error})))
            )
        })
    ))

    _deleteBlog = createEffect(()=>
    this.actions$.pipe(
        ofType(deleteBlog),
        exhaustMap(action=>{
            return this.services.deleteBlog(action.id).pipe(
                map(()=>{
                    return deleteBlogSuccess({id:action.id })
                }),
                catchError((_error)=> of(loadBlogFail({ErrorText:_error})))
            )
        })
    ))
}