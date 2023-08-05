import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogById } from 'src/app/shared/store/blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/global/appState.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  pageTitle = '';
  editBlogId = 0;
  editData!: BlogModel;

  constructor(
    private dialogref: MatDialogRef<AddBlogComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.pageTitle = this.data.title;
    if (this.data.isedit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe((_data) => {
        this.editData = _data;
        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description,
        });
      });
    }
  }

  closePopup() {
    this.dialogref.close();
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
  });

  saveBlogs() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      };
      if(this.data.isedit){
        _blogInput.id = this.blogForm.value.id as number
        this.store.dispatch(updateBlog({ bloginput: _blogInput }));
      }else {
        this.store.dispatch(addBlog({ bloginput: _blogInput }));
      }
      this.closePopup();
    }
  }
}
