import { Component, Input, OnInit } from '@angular/core';
import { PokemonsTypesColors } from 'src/app/shared/consts/pokemonsTypesColors.const';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonModel;
  color = '#ffffff99';

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  changeColorBackground(color: string): void {
    this.color =
      PokemonsTypesColors[color] !== undefined
        ? PokemonsTypesColors[color]
        : '#75717182';
  }

  favorite(id: number): void {
    this.favoriteService.favorite(id);
  }
}
