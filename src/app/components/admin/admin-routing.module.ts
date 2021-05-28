import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddPostingCategoryComponent } from './add-posting-category/add-posting-category.component';
import { PostingCategoryListingComponent } from './posting-category-listing/posting-category-listing.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: PostingCategoryListingComponent
      },
      {
        path: 'posting-category-listing',
        component: PostingCategoryListingComponent
      },
      {
        path: 'add-posting-category',
        component: AddPostingCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
