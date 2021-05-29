import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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


  constructor(
    location: Location,
    router: Router
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
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section
    this.fadeSection = !this.fadeSection;
  }

}