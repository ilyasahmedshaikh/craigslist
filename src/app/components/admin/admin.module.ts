import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddPostingCategoryComponent } from './add-posting-category/add-posting-category.component';
import { PostingCategoryListingComponent } from './posting-category-listing/posting-category-listing.component';


@NgModule({
  declarations: [AdminComponent, AddPostingCategoryComponent, PostingCategoryListingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
