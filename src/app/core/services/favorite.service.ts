import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private keyFavorites = 'favorites';
  favorite$ = new BehaviorSubject<number[]>([]);
  constructor() {
      this.favorite$.next(this.getFavorites());
  }
  favorite(id: number): void {
    this.storeFavorite(id);
  }

  private getFavorites(): number[] {
    return JSON.parse(sessionStorage.getItem(this.keyFavorites)) ?? [];
  }

  private storeFavorite(id: number): void {
    let favorites = this.getFavorites();
    if (favorites.includes(id)) {
      favorites = favorites.filter((idFilter) => idFilter !== id);
    } else {
      favorites = favorites.concat([id]);
    }
    sessionStorage.setItem(this.keyFavorites, JSON.stringify(favorites));
    this.favorite$.next(favorites);
  }
}
