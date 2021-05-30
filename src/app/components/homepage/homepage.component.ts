import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/http/config/config.service'
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  postings: any = [];
  categories: any = [];

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
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

}
