import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(
    email: string,
    password: string
  ): Observable<{ message: string; success: boolean }> {
    return of({ message: 'Login efetuado com sucesso', success: true });
  }
}
