import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlog } from 'src/app/shared/store/blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/global/appState.model';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { timeInterval } from 'rxjs';

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

  ngOnInit(): void {
    this.store.select(getBlog).subscribe(item => {
      this.blogList = item
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

}
