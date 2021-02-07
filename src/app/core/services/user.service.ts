import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: boolean;
  constructor() {}
  login(): void {
    this.user = true;
  }
}
