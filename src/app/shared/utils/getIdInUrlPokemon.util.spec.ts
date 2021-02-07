import { getIdInUrlPokemon } from './getIdInUrlPokemon.util';

describe('GET ID FROM URL Util', () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/1/';
  const urls = [
    'https://pokeapi.co/api/v2/pokemon/1/',
    'https://pokeapi.co/api/v2/pokemon/2/',
    'https://pokeapi.co/api/v2/pokemon/3/',
    'https://pokeapi.co/api/v2/pokemon/4/',
    'https://pokeapi.co/api/v2/pokemon/999/',
    'https://pokeapi.co/api/v2/pokemon/1011/',
  ];
  it('Get ID from url "https://pokeapi.co/api/v2/pokemon/1/" to 1', () => {
    expect(getIdInUrlPokemon(url)).toBe(1);
  });
  it('transforms urls', () => {
    const results = [1, 2, 3, 4, 999, 1011];
    urls.forEach((urlValue, index) => {
      expect(getIdInUrlPokemon(urlValue)).toBe(results[index]);
    });
  });
});
