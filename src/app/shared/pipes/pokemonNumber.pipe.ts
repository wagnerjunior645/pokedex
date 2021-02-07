import { Pipe, PipeTransform } from '@angular/core';
import { getIdInUrlPokemon } from '../utils/getIdInUrlPokemon.util';

@Pipe({ name: 'numberPokemon' })
export class PokemonNumberPipe implements PipeTransform {
  transform(url: string): string {
    const totalOfPokemons = '1118';
    if (!url) {
      return '';
    }
    let id = getIdInUrlPokemon(url).toString();
    const diference = ( totalOfPokemons.length - id.length );
    if (diference > 0) {
        const zeros = Array(diference).fill('0');
        id = zeros.concat(id.split('')).join('');
    }
    return id;
  }
}
