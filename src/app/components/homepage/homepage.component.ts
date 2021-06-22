import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/http/config/config.service'
import { ApiService } from '../../core/http/api/api.service';
import { PostingCategoryService } from '../../core/http/posting-category/posting-category.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  postings: any = [];
  categories: any = [];

  searchText: string = '';

  constructor(
    private router: Router,
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

  getSearchQuery(event) {
    this.searchText = event;
    console.log(this.searchText);
  }

}
