import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private http : HttpClient
  ) { }
  haveAccess(){
     return true
  }
  // GET ALL BLOGS
  getAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs")
  }
  // CREATE A BLOG
  createBlog(bloginput : BlogModel) {
    return this.http.post('http://localhost:3000/Blogs',bloginput).pipe(
      tap(()=>{
        this.http.get <BlogModel> ("http://localhost:3000/Blogs?_limit=1&_sort=id&_order=desc")
      })
    )
  }
  
  // UPDATE A BLOG
  updateBlog(bloginput : BlogModel) {
    return this.http.put('http://localhost:3000/Blogs/'+bloginput.id,bloginput)
  }

  deleteBlog(blogid : number) {
    return this.http.delete('http://localhost:3000/Blogs/'+blogid)
  }

}
