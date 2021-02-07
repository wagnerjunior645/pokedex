import { PokemonNumberPipe } from './pokemonNumber.pipe';

describe('PokemonNumberPipe', () => {
  const pipe = new PokemonNumberPipe();
  const url = 'https://pokeapi.co/api/v2/pokemon/1/';
  const urls = [
    'https://pokeapi.co/api/v2/pokemon/1/',
    'https://pokeapi.co/api/v2/pokemon/2/',
    'https://pokeapi.co/api/v2/pokemon/3/',
    'https://pokeapi.co/api/v2/pokemon/4/',
    'https://pokeapi.co/api/v2/pokemon/999/',
    'https://pokeapi.co/api/v2/pokemon/1011/',
  ];
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "https://pokeapi.co/api/v2/pokemon/1/" to "0001"', () => {
    expect(pipe.transform(url)).toBe('0001');
  });
  it('transforms urls', () => {
    const results = ['0001', '0002', '0003', '0004', '0999', '1011'];
    urls.forEach((urlValue, index) => {
      expect(pipe.transform(urlValue)).toBe(results[index]);
    });
  });
});
