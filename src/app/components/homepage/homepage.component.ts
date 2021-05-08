import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        title: 'Community',
        service: 'Service 1'
      },
      {
        title: 'Housing',
        service: 'Service 1'
      },
      {
        title: 'Jobs',
        service: 'Service 1'
      },
      {
        title: 'Services',
        service: 'Service 1'
      },
      {
        title: 'For Sale',
        service: 'Service 1'
      }
    ]
  }

}
