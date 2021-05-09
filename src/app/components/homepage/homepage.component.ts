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
        id: 1,
        title: 'Community',
        categories: [
          { id: 1, name: 'activities'},
          { id: 2, name: 'artists'},
          { id: 3, name: 'car pools'},
          { id: 4, name: 'childcare'},
          { id: 5, name: 'classes'},
          { id: 6, name: 'events'},
          { id: 7, name: 'general'},
          { id: 8, name: 'groups'},
          { id: 9, name: 'local news'},
          { id: 10, name: 'lost+found'}
        ]
      },
      {
        id: 2,
        title: 'Housing',
        categories: [
          { id: 1, name: 'flats / housing'},
          { id: 2, name: 'holiday rentals'},
          { id: 3, name: 'housing swap'},
          { id: 4, name: 'housing wanted'},
          { id: 5, name: 'office / commercial'},
          { id: 6, name: 'parking / storage'},
          { id: 7, name: 'rooms / shared'},
          { id: 8, name: 'housing / real estate for sale'},
          { id: 9, name: 'rooms wanted'},
          { id: 10, name: 'sub-lets / temporary'}

        ]
      },
      {
        id: 3,
        title: 'Jobs',
        categories: [
          { id: 1, name: 'accounting+finance'},
          { id: 2, name: 'admin / office'},
          { id: 3, name: 'arch / engineering'},
          { id: 4, name: 'biotech / science'},
          { id: 5, name: 'business / mgmt'},
          { id: 6, name: 'customer services'},
          { id: 7, name: 'education'},
          { id: 8, name: 'etc / misc'},
          { id: 9, name: 'general labour'},
          { id: 10, name: 'government'}
        ]
      },
      {
        id: 4,
        title: 'Services',
        categories: [
          { id: 1, name: 'beauty'},
          { id: 2, name: 'cars / automotive'},
          { id: 3, name: 'cell / mobile'},
          { id: 4, name: 'computer'},
          { id: 5, name: 'creative'},
          { id: 6, name: 'events'},
          { id: 7, name: 'cycle'},
          { id: 8, name: 'farm+garden'},
          { id: 9, name: 'financial'},
          { id: 10, name: 'health / well'}
        ]
      },
      {
        id: 5,
        title: 'Discussion Forums',
        categories: [
          { id: 1, name: 'apple'},
          { id: 2, name: 'beauty'},
          { id: 3, name: 'cycle'},
          { id: 4, name: 'diet'},
          { id: 5, name: 'bikes'},
          { id: 6, name: 'film'},
          { id: 7, name: 'food'},
          { id: 8, name: 'parent'},
          { id: 9, name: 'open'},
          { id: 10, name: 'music'}
        ]
      },
      {
        id: 6,
        title: 'For Sale',
        categories: [
          { id: 1, name: 'auto+parts'},
          { id: 2, name: 'antiques'},
          { id: 3, name: 'appliances'},
          { id: 4, name: 'bike parts'},
          { id: 5, name: 'baby+kid'},
          { id: 6, name: 'beauty+health'},
          { id: 7, name: 'computer parts'},
          { id: 8, name: 'books'},
          { id: 9, name: 'tools'},
          { id: 10, name: 'bikes'}
        ]
      }
    ]
  }

}
