import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { CreateAPostingComponent } from './create-a-posting/create-a-posting.component';
import { AddPostingTypeComponent } from './add-posting-type/add-posting-type.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [PostingComponent, CreateAPostingComponent, AddPostingTypeComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    PostingRoutingModule
  ]
})
export class PostingModule { }
