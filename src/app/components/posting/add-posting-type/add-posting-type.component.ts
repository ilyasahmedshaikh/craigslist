import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posting-type',
  templateUrl: './add-posting-type.component.html',
  styleUrls: ['./add-posting-type.component.scss']
})
export class AddPostingTypeComponent implements OnInit {

  addPostingTypeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.addPostingTypeForm = this.fb.group({
      postingType: [false, Validators.required]
    });
  }

}
