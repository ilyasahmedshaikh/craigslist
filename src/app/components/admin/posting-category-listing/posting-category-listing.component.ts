import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { PostingCategoryService } from '../../../core/http/posting-category/posting-category.service';

@Component({
  selector: 'app-posting-category-listing',
  templateUrl: './posting-category-listing.component.html',
  styleUrls: ['./posting-category-listing.component.scss']
})
export class PostingCategoryListingComponent implements OnInit {

  postings: any = [];
  categories: any = [];

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private postingCategory: PostingCategoryService,
  ) { }

  ngOnInit(): void {
    this.getPostings();
  }

  getPostings() {
    this.api.getAll(this.config.collections.postings).subscribe(p => {
      if (p) {
        this.postings = p;
        this.api.getAll(this.config.collections.categories).subscribe(c => {
          if (c) {
            this.categories = c;
          }
        },
        error => alert(error));
      }
    },
    error => alert(error));
  }

  deletePosting() {

  }

  editPosting() {

  }

  deleteCategory() {

  }

  editCategory() {

  }

}
