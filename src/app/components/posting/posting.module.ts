import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { CreateAPostingComponent } from './create-a-posting/create-a-posting.component';
import { AddPostingTypeComponent } from './add-posting-type/add-posting-type.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewPostingsComponent } from './view-postings/view-postings.component';
import { PostingDetailComponent } from './posting-detail/posting-detail.component';


@NgModule({
  declarations: [PostingComponent, CreateAPostingComponent, AddPostingTypeComponent, AddCategoryComponent, ViewPostingsComponent, PostingDetailComponent],
  imports: [
    CommonModule,
    PostingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostingModule { }
