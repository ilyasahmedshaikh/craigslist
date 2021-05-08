import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostingComponent } from './posting.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPostingTypeComponent } from './add-posting-type/add-posting-type.component';
import { CreateAPostingComponent } from './create-a-posting/create-a-posting.component';
import { ViewPostingsComponent } from './view-postings/view-postings.component';
import { PostingDetailComponent } from './posting-detail/posting-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostingComponent,
    children: [
      {
        path: '',
        component: ViewPostingsComponent
      },
      {
        path: 'view-postings',
        component: ViewPostingsComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'add-posting',
        component: AddPostingTypeComponent
      },
      {
        path: 'create-posting',
        component: CreateAPostingComponent
      },
      {
        path: 'posting-detail',
        component: PostingDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingRoutingModule { }
