import { Observable, of } from 'rxjs';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { PokemonDetailsModel } from 'src/app/shared/models/pokemonDetail.model';
import { listPokemonsMock } from './listPokemons.mock';
import { pokemonMock } from './pokemon.mock';

export class PokemonsServiceMock {
  findAll(query: {
    offset: number;
    limit: number;
  }): Observable<PaginationModel<PokemonModel[]>> {
    return of(listPokemonsMock);
  }

  findByName(name: string): Observable<PokemonDetailsModel> {
    return of(pokemonMock);
  }

  findById(id: number): Observable<PokemonDetailsModel> {
    return of(pokemonMock);
  }
}
