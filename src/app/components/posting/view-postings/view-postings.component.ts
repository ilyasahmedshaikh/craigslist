import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-postings',
  templateUrl: './view-postings.component.html',
  styleUrls: ['./view-postings.component.scss']
})
export class ViewPostingsComponent implements OnInit {

  viewPostingForm: any = FormGroup;
  data: any = [];
  card: any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.data = [
      {
        id: 1,
        image: 'assets/img/add4.jpg',
        name: 'Drum Tracks',
        date: 'March, 5, 2020 -',
        location: 'Berlin'
      },
      {
        id: 2,
        image: 'assets/img/add2.jpg',
        name: 'Seeking Piano',
        date: 'April, 20, 2021 -',
        location: 'Remote'
      },
      {
        id: 3,
        image: 'assets/img/add1.jpg',
        name: 'Serious Dark',
        date: 'May, 9, 2021 -',
        location: 'Berlin'
      },
      {
        id: 4,
        image: 'assets/img/add5.jpg',
        name: 'Music Room',
        date: 'June, 22, 2020 -',
        location: 'Hamburg'
      },
      {
        id: 5,
        image: 'assets/img/add3.jpg',
        name: '3D Groovy',
        date: 'April, 28, 2021 -',
        location: 'Berlin'
      },
      {
        id: 6,
        image: 'assets/img/add6.jpg',
        name: ' Seeking piano',
        date: 'April, 20, 2021 -',
        location: 'Berlin'
      }
    ],
    this.card = [
      {
        id: 1,
        image: 'assets/img/add1.jpg',
        name: 'Serious Dark',
        date: 'May, 9, 2021 -',
        location: 'Berlin'
      },
      {
        id: 2,
        image: 'assets/img/add2.jpg',
        name: 'Seeking Piano',
        date: 'April, 20, 2021 -',
        location: 'Remote'
      },
      {
        id: 3,
        image: 'assets/img/add3.jpg',
        name: '3D Groovy',
        date: 'April, 28, 2021 -',
        location: 'Berlin'
      },
      {
        id: 4,
        image: 'assets/img/add4.jpg',
        name: 'Drum Tracks',
        date: 'March, 5, 2020 -',
        location: 'Berlin'
      },
      {
        id: 5,
        image: 'assets/img/add5.jpg',
        name: 'Music Room',
        date: 'June, 22, 2020 -',
        location: 'Hamburg'
      },
      {
        id: 6,
        image: 'assets/img/add6.jpg',
        name: ' Seeking piano',
        date: 'April, 20, 2021 -',
        location: 'Berlin'
      }
    ]
  }

  formInit() {
    this.viewPostingForm = this.fb.group({
      categoryName: ['', Validators.required],
      postingType: ['', Validators.required],
      postingTypeAll: ['', Validators.required],
      accountPost: ['', Validators.required],
      categories: [false, Validators.required],
      searchTitles: [false, Validators.required],
      type: [false, Validators.required],
      list: ['', Validators.required]
    });
  }

}
