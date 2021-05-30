import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { PostingCategoryService } from '../../../core/http/posting-category/posting-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm: any = FormGroup;
  categories: any = [];
  posting: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private postingCategory: PostingCategoryService,
  ) {
    this.posting = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    this.formInit();

    if (this.posting) {
      this.getCategories();
    }
  }

  formInit() {
    this.addCategoryForm = this.fb.group({
      categoryType: ['', Validators.required]
    });
  }

  getCategories() {
    this.api.getWithQuery(this.config.collections.categories, "postingId", "==", this.posting.id).subscribe(c => {
      if (c) {
        this.categories = c;
      }
    },
    error => alert(error));
  }

  next() {
    let selected = this.categories.find(c => c.id == this.addCategoryForm.value.categoryType);
    this.router.navigate(['/posting/create-posting'], { state: { posting: this.posting, category: selected } });
  }

}
