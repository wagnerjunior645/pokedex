import { PokemonDetailsModel } from 'src/app/shared/models/pokemonDetail.model';

export const pokemonMock: PokemonDetailsModel = {
  id: 1,
  name: 'aabb',
  types: [{ slot: 1, type: { name: 'grass', url: 'http://aa' } }],
};
