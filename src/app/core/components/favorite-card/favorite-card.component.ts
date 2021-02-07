import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {

  @Input() id: number;
  isFavorited = true;
  changeFavorite$: Observable<number[]>;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.changeFavorite$ = this.favoriteService.favorite$;
  }

}
