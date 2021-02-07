import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  detectScrollOnBotton = new EventEmitter<boolean>();
  constructor() {}
  touchBotton(): void{
    this.detectScrollOnBotton.emit(true);
  }
}
