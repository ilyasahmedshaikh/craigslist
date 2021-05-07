import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackNavigateService {

  public back = new Subject<boolean>();
  visible: boolean = false;

  private history: string[] = []
  count: number = 0;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.history.includes(event.urlAfterRedirects)) this.history.filter(e => e !== event.urlAfterRedirects);
        else this.history.push(event.urlAfterRedirects);
      }
    })
  }

  toggleBackState(state?: any) {
    if (state) {
      this.back.next(state);
    } else {
      this.visible = !this.visible;
      this.back.next(this.visible);
    }
  }

  backLocation(): void {
    this.history.pop();

    if (this.history.length == 0) this.back.next(false);

    if (this.history.length > 0) {
      this.location.back();
      if (this.history.length == 1) this.back.next(false);
    }
  }
}
