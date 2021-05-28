import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  collections: any = {
    users: "users",
    postings: "postings",
    categories: "categories",
    posting_categories: "posting_categories",
  }

  constructor() { }
}
