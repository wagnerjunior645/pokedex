import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PokemonDetailsModel } from 'src/app/shared/models/pokemonDetail.model';
import { PokemonsService } from '../../http/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  @Input() id: number;
  @Output() colorType = new EventEmitter<string>();
  pokemonDetails$: Observable<PokemonDetailsModel>;
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonDetails$ = this.pokemonsService.findById(this.id).pipe(
      tap((pokemonDetails) => {
        this.colorType.emit(pokemonDetails.types[0].type.name);
      })
    );
  }
}
