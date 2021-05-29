import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-a-posting',
  templateUrl: './create-a-posting.component.html',
  styleUrls: ['./create-a-posting.component.scss']
})
export class CreateAPostingComponent implements OnInit {

  createPostingForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
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
      clMail: [false, Validators.required],
      noRepliesEmail: [false, Validators.required],
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
