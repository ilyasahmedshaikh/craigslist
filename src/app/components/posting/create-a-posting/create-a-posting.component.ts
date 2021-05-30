import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { PostingCategoryService } from '../../../core/http/posting-category/posting-category.service';

@Component({
  selector: 'app-create-a-posting',
  templateUrl: './create-a-posting.component.html',
  styleUrls: ['./create-a-posting.component.scss']
})
export class CreateAPostingComponent implements OnInit {

  createPostingForm: any = FormGroup;
  postingNcategory: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private postingCategory: PostingCategoryService,
  ) {
    this.postingNcategory = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.formInit();

    console.log(this.postingNcategory.posting);
    console.log(this.postingNcategory.category);
  }

  formInit() {
    this.createPostingForm = this.fb.group({
      postingTitle: ['', Validators.required],
      price: ['', Validators.required],
      cityNeighborhood: ['', Validators.required],
      postalCode: ['', Validators.required],
      description: ['', Validators.required],
      makeManufacturer: ['', Validators.required],
      modelNameNumber: ['', Validators.required],
      condition: ['', Validators.required],
      sizeDimensions: ['', Validators.required],
      languagePosting: ['', Validators.required],
      cryptocurrency: [false, Validators.required],
      deliveryAvailable: [false, Validators.required],
      moreAdsLink: [true, Validators.required],
      emailPrivacy: ['option1', Validators.required],
      showMyNumber: [false, Validators.required],
      phoneCalls: [false, Validators.required],
      textSms: [false, Validators.required],
      phoneNumber: ['', Validators.required],
      extension: ['', Validators.required],
      contactName: ['', Validators.required],
      contactYou: [false, Validators.required]
    });
  }

}
