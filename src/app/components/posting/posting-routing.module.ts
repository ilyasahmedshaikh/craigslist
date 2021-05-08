import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostingComponent } from './posting.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPostingTypeComponent } from './add-posting-type/add-posting-type.component';
import { CreateAPostingComponent } from './create-a-posting/create-a-posting.component';

const routes: Routes = [
  {
    path: '',
    component: PostingComponent,
    children: [
      {
        path: '',
        component: AddCategoryComponent
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingRoutingModule { }
