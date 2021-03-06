import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { PostingCategoryService } from '../../../core/http/posting-category/posting-category.service';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';

@Component({
  selector: 'app-create-a-posting',
  templateUrl: './create-a-posting.component.html',
  styleUrls: ['./create-a-posting.component.scss']
})
export class CreateAPostingComponent implements OnInit {

  createPostingForm: any = FormGroup;
  saleForm: any = FormGroup;
  contactForm: any = FormGroup;
  housingForm: any = FormGroup;
  jobForm: any = FormGroup;

  postingNcategory: any = {};

  imagePreview: string = "";
  imageUploaded: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private postingCategory: PostingCategoryService,
    private loginSrv: CheckLoginService,
  ) {
    this.postingNcategory = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.loginSrv.status.subscribe(res => {
      if(!res) {
        this.router.navigateByUrl('/auth/login');
      }
    });

    this.formInit();

    if (this.postingNcategory) {
      console.log(this.postingNcategory.posting);
      console.log(this.postingNcategory.category);
    } else {
      this.router.navigateByUrl('/posting/add-posting');
    }
  }

  formInit() {
    this.createPostingForm = this.fb.group({
      postingTitle: ['', Validators.required],
      price: ['', Validators.required],
      cityNeighborhood: ['', Validators.required],
      postalCode: ['', Validators.required],
      description: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
    });

    this.saleForm = this.fb.group({
      makeManufacturer: ['', Validators.required],
      modelNameNumber: ['', Validators.required],
      condition: ['', Validators.required],
      sizeDimensions: ['', Validators.required],
      languagePosting: ['', Validators.required],
      cryptocurrency: [false, Validators.required],
      deliveryAvailable: [false, Validators.required],
      moreAdsLink: [true, Validators.required],
    });

    this.housingForm = this.fb.group({
      sqft: ['', Validators.required],
      housingType: ['', Validators.required],
      laundry: ['', Validators.required],
      parking: ['', Validators.required],
      bedRooms: ['', Validators.required],
      bathRooms: ['', Validators.required],
      availableAt:  [new Date(), Validators.required],
      catsOk: [false],
      dogsOk: [false],
      furnished: [false],
      noSmoking: [false],
      wheelChairAccessible: [false],
      airConditioning: [false],
      evCharging: [false],
    });

    this.jobForm = this.fb.group({
      compensation:  ['', Validators.required],
      companyName:  ['', Validators.required],
      employmentType:  ['', Validators.required],
      directContact: [false, Validators.required],
      internship: [false, Validators.required],
      nonProfit: [false, Validators.required],
      relocationAssistance: [false, Validators.required],
      telecommutingOk: [false, Validators.required],
    })

    this.contactForm = this.fb.group({
      emailPrivacy: ['CL mail relay', Validators.required],
      showMyNumber: [true, Validators.required],
      phoneCalls: [true, Validators.required],
      textSms: [true, Validators.required],
      phoneNumber: ['', Validators.required],
      extension: ['', Validators.required],
      contactName: ['', Validators.required],
      contactYou: [true, Validators.required]
    });
  }

  createPost() {
    let data = {};

    let basicInfo = {
      image: this.imagePreview,
      postingId: this.postingNcategory.posting.id,
      categoryId: this.postingNcategory.category.id,
      user: this.loginSrv.getUserData(),
      ...this.createPostingForm.value,
      ...this.contactForm.value
    }

    if (this.postingNcategory.posting.name == 'For Sale') {
      data = {
        ...this.saleForm.value,
        ...basicInfo
      }
    }
    else if (this.postingNcategory.posting.name == 'Housing') {
      data = {
        ...this.housingForm.value,
        ...basicInfo
      }
    }
    else if (this.postingNcategory.posting.name == 'Jobs') {
      data = {
        ...this.jobForm.value,
        ...basicInfo
      }
    }
    else {
      data = { ...basicInfo }
    }

    let request = this.api.post(this.config.collections.posts, data);

    request.then(() => {
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  onImagePreview(event) {
    this.imagePreview = event.preview;
    this.imageUploaded = event.imageUploaded;
  }

}
