import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-add-posting-category',
  templateUrl: './add-posting-category.component.html',
  styleUrls: ['./add-posting-category.component.scss']
})
export class AddPostingCategoryComponent implements OnInit {

  postingForm: any = FormGroup;
  categoryForm: any = FormGroup;

  postings: any = [];
  categories: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formsInit();
    this.getPostings();
    this.getCategories();
  }

  formsInit() {
    this.postingForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.categoryForm = this.fb.group({
      postingId: [0, Validators.required],
      name: ['', Validators.required],
    });
  }

  getPostings() {
    this.postings = this.api.getAll(this.config.collections.postings);
  }

  getCategories() {
    this.categories = this.api.getAll(this.config.collections.categories);
  }

  createPosting() {
    let request = this.api.post(this.config.collections.postings, this.postingForm.value);

    request.then(() => {
      this.postingForm.reset();
      this.router.navigateByUrl("/admin/posting-category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

  createCategory() {
    let request = this.api.post(this.config.collections.categories, this.categoryForm.value);

    request.then(() => {
      this.categoryForm.reset();
      this.router.navigateByUrl("/admin/posting-category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

}
