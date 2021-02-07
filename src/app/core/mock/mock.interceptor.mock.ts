import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listPokemonsMock } from './listPokemons.mock';

export class MockInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(new HttpResponse({ status: 200, body: listPokemonsMock }));
  }
}
