import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CheckLoginService } from '../../core/services/check-login/check-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;

  pageTitle: any = "";
  currentURL: string = "";

  userData: any = {};

  constructor(
    private location: Location,
    private router: Router,
    private checkLogin: CheckLoginService,
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentURL = location.path();

        let spliter = this.currentURL.split('/');
        this.pageTitle = spliter[spliter.length-1];
        this.pageTitle = this.pageTitle.replaceAll("-", " ");
      } else {
        this.pageTitle = 'Home';
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section
    this.fadeSection = !this.fadeSection;
  }

  getData() {
    this.userData = this.checkLogin.getUserData();
  }

}
