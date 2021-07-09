import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  collections: any = {
    users: "users",
    postings: "postings",
    categories: "categories",
    posts: "posts",
    comments: "comments",
    flagged: "flagged",
    favourites: "favourites",
  }

  constructor() { }
}
