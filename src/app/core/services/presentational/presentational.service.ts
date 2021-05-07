import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationalService {

  public header = new BehaviorSubject(true);
  public bottomBar = new BehaviorSubject(true);

  constructor() { }

  setPresentation(componentType: any, flag: any) {
    if(componentType == 'header') this.header.next(flag);
    if(componentType == 'bottomBar') this.bottomBar.next(flag);
  }

}
