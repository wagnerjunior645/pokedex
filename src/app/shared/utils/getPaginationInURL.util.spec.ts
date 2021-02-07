import { getPaginationInURL } from './getPaginationInURL.util';

describe('getIdInUrlPokemon Utils', () => {
  it('should limit=20 and offset=20', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
    const { limit, offset } = getPaginationInURL(url);
    expect(limit).toBe(20);
    expect(offset).toBe(20);
  });
  it('should limit and offset equals default value = 20', () => {
    const url = null;
    const { limit, offset } = getPaginationInURL(url);
    expect(limit).toBe(20);
    expect(offset).toBe(0);
  });
});
