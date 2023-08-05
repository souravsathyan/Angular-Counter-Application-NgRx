import { Injectable } from "@angular/core";
import { MasterService } from "../../master.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG, loadBlogFail, loadBlogSuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class BlogEffects {
    
    constructor(
        private actions$ : Actions,
        private services : MasterService
    ){}

    _blog = createEffect(()=>
        this.actions$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action)=>{
                return this.services.getAllBlogs().pipe(
                    map((data)=>{
                        return loadBlogSuccess({blogList: data})
                    }),
                    catchError((_error)=> of(loadBlogFail({Errortext : _error.message})) )
                )
            })
        )
    )
}