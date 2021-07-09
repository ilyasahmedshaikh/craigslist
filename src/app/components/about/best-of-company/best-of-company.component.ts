import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-best-of-company',
  templateUrl: './best-of-company.component.html',
  styleUrls: ['./best-of-company.component.scss']
})
export class BestOfCompanyComponent implements OnInit {

  data: any = [];
  categories: any = [];

  searchText: string = '';

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getPostings();
  }

  getPostings() {
    this.api.getAll(this.config.collections.posts).subscribe(res => {
      this.data = res;
      this.getCategories();
      console.log(this.data);
    })
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories).subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    })
  }

  findCategory(item) {
    let category = this.categories.find(i => i.id == item.categoryId);
    return category.name;
  }

  viewDetailed(item) {
    this.router.navigate(['/posting/posting-detail'], { state: { data: item, posting: {} } });
  }

  getSearchQuery(event) {
    this.searchText = event;
  }

}
