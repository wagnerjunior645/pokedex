import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl();
  @Output() searchValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitSearch(): void {
    this.searchValue.emit(this.searchControl.value);
  }
}
