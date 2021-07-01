import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-view-postings',
  templateUrl: './view-postings.component.html',
  styleUrls: ['./view-postings.component.scss']
})
export class ViewPostingsComponent implements OnInit {

  viewPostingForm: any = FormGroup;
  data: any = [];
  card: any = [];
  categories: any = [];

  routedData: any = {};
  routedType: string = "posting";

  viewType: string = 'list';

  showCategoriesBool: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
  ) {
    this.routedData = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    console.log(this.routedData);
    
    this.formInit();

    if(this.routedData) this.getPostings();
    else this.router.navigateByUrl('/homepage');
  }

  formInit() {
    this.viewPostingForm = this.fb.group({
      searchTitles: [false],
      hasImage: [false],
      postedToday: [''],
      bundleDuplicate: [''],
      includeNearby: [''],
      // housin
      pMin: [''],
      pMax: [''],
      bedMin: [''],
      bedMax: [''],
      bathMin: [''],
      bathMax: [''],
      catsOk: [false],
      dogsOk: [false],
      furnished: [false],
      noSmoking: [false],
      wheelChairAccessible: [false],
      airConditioning: [false],
      evCharging: [false],
      // jobs 
      internship: [false],
      nonProfit: [false],
      telecommute: [false],
      fullTime: [false],
      partTime: [false],
      conract: [false],
      emplyeesChoice: [false],
      // for sale 
      makeNmodel: [''],
      new: [false],
      likeNew: [false],
      excellent: [false],
      good: [false],
      fair: [false],
      salvage: [false],
    });
  }

  onChangeViewType(event) {
    this.viewType = event.target.value;
  }

  getPostings() {
    if (this.routedType == 'posting') {
      // get categories by postingId
      this.api.getWithQuery(this.config.collections.categories, 'postingId', "==", this.routedData.id).subscribe(res => {
        this.categories = res;
        console.log(res);
      })

      // get posts related to selected posting topic
      this.api.getWithQuery(this.config.collections.posts, 'postingId', "==", this.routedData.id).subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
    }

    if (this.routedType == 'category') {
      this.api.getWithQuery(this.config.collections.posts, 'categoryId', "==", this.routedData.id).subscribe(res => {
        console.log(res);
      })
    }
  }

  onExpandCategories() {
    this.showCategoriesBool = !this.showCategoriesBool;
  }

}
