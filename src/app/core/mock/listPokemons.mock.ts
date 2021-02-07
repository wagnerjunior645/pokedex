import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

export const listPokemonsMock: PaginationModel<PokemonModel[]> = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=6&limit=6',
  previous: null,
  results: [
    {
      id: 1,
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      id: 2,
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      id: 3,
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      id: 4,
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      id: 5,
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      id: 6,
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
  ],
};
