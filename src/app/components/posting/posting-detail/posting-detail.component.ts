import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-posting-detail',
  templateUrl: './posting-detail.component.html',
  styleUrls: ['./posting-detail.component.scss']
})
export class PostingDetailComponent implements OnInit {

  data: any = {};

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

}
