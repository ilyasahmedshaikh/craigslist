import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { PostingCategoryService } from '../../../core/http/posting-category/posting-category.service';

@Component({
  selector: 'app-add-posting-type',
  templateUrl: './add-posting-type.component.html',
  styleUrls: ['./add-posting-type.component.scss']
})
export class AddPostingTypeComponent implements OnInit {

  addPostingTypeForm: any = FormGroup;
  postings: any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private postingCategory: PostingCategoryService,
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getPostings();
  }

  formInit() {
    this.addPostingTypeForm = this.fb.group({
      postingType: ['', Validators.required]
    });
  }

  getPostings() {
    this.api.getAll(this.config.collections.postings).subscribe(p => {
      if (p) {
        this.postings = p;
      }
    },
    error => alert(error));
  }

  next() {
    let selected = this.postings.find(c => c.id == this.addPostingTypeForm.value.postingType);
    this.router.navigate(['/posting/add-category'], { state: { data: selected } })
  }

}
