import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingCategoryService {

  public data = new Subject<any>();

  constructor() { }

  setData = (postings, categories) => {
    this.data.next({
      ...postings,
      ...categories
    })
  }

}
