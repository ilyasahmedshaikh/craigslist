import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() getQuery = new EventEmitter<string>();
  @Input('placeHolder') placeHolder: any;

  searchQuery: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  onChangeSearch(event) {
    let search = event;
    this.getQuery.emit(search);
  }

}
