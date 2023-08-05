import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from 'src/app/shared/store/blog/blog.model';
import { getBlog, getBlogInfo } from 'src/app/shared/store/blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/global/appState.model';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { timeInterval } from 'rxjs';
import { deleteBlog, loadBlog } from 'src/app/shared/store/blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor(
    private store : Store <AppStateModel>,
    private MatDialog : MatDialog
  ){}

  blogList !: BlogModel[]
  blogInfo !: Blogs

  ngOnInit(): void {
    this.store.dispatch(loadBlog())
    this.store.select(getBlogInfo).subscribe(item => {
      // this.blogList = item
      this.blogInfo = item
    })
  }

  addBlog(){
    this.openPopup(0,'Add Blog')
  }

  openPopup(id:any, title:any, isedit=false){
    this.MatDialog.open(AddBlogComponent,{
      width : '40%',
      data:{
        id:id,
        title:title,
        isedit:isedit
      }
    })
  }

  editBlog(id:any){
    this.openPopup(id,'Edit Blog',true)
  }

  removeBlog(id:any){
    if(confirm("Are you sure")){
      this.store.dispatch(deleteBlog({id:id}))
    }
  }

}
