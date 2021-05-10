import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        title: 'Classified Postings',
        categories: [
          { id: 1, name: 'how to post'},
          { id: 2, name: 'are all ads free?'},
          { id: 3, name: 'how to reply'},
          { id: 4, name: 'what is 2-way email relay?'},
          { id: 5, name: 'how to edit or delete'},
          { id: 6, name: 'how to re-post'},
          { id: 7, name: 'how to add images'},
          { id: 8, name: 'resend post/edit/delete email'},
          { id: 9, name: 'user accounts'},
          { id: 10, name: 'phone verification'},
          { id: 8, name: 'where is my posting?'},
          { id: 9, name: 'where is my self-publishing email?'},
          { id: 10, name: 'why was my posting deleted?'},
          { id: 8, name: 'what are "flags" and "flagging"'},
          { id: 9, name: 'what HTML is supported?'},
          { id: 10, name: 'what are favorites?'},
          { id: 11, name: 'where can i advertise my services?'},
          { id: 12, name: 'email rejected - non-generic DNS'},
          { id: 13, name: 'email rejected - rDNS failure'},
          { id: 14, name: 'frequently asked questions'}
        ]
      },
      {
        id: 2,
        title: 'Paid Postings',
        categories: [
          { id: 1, name: 'vehicles by dealer fees'},
          { id: 2, name: 'vehicle by owner fees'},
          { id: 3, name: 'posting fees'},
          { id: 4, name: 'how to submit a paid post'},
          { id: 5, name: 'lifespan of posts'},
          { id: 6, name: 'how to edit or delete a paid post'},
          { id: 7, name: 'how to repost a paid post'},
          { id: 8, name: 'pay an invoice online'},
          { id: 9, name: 'paid posts: frequently asked questions'}
        ]
      },
      {
        id: 3,
        title: 'Miscellaneous ',
        categories: [
          { id: 1, name: 'system status'},
          { id: 2, name: 'searching craigslist'},
          { id: 3, name: '"help desk" forum'},
          { id: 4, name: 'contact us'}
        ]
      },
      {
        id: 4,
        title: ' LEGAL, Copyright, Harassment  ',
        categories: [
          { id: 1, name: 'law enforcement (subpoenas, etc)'},
          { id: 2, name: 'copyright violation'},
          { id: 3, name: 'personal harassment'},
          { id: 4, name: 'terms of use'}
        ]
      },
      {
        id: 5,
        title: 'Avoiding Scams And Fraud ',
        categories: [
          { id: 1, name: 'spotting and avoiding scams'},
          { id: 2, name: 'what is "phishing"?'},
          { id: 3, name: 'who is posting ads in my account?'},
          { id: 4, name: 'why is CL emailing me to log in?'},
          { id: 5, name: 'can I trust this great but odd deal?'}
        ]
      },
    ]
  }

}
