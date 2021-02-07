import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonsService } from './pokemons.service';
import { listPokemonsMock } from '../mock/listPokemons.mock';
import { getPaginationInURL } from 'src/app/shared/utils/getPaginationInURL.util';
import { HttpParams } from '@angular/common/http';
import { pokemonMock } from '../mock/pokemon.mock';

describe('PokemonsService', () => {
  let service: PokemonsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of pokemons with pagination', () => {
    const listOfPokemons = listPokemonsMock;
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6';
    const queryParams = getPaginationInURL(url);
    service.findAll(queryParams).subscribe((response) => {
      expect(response.next).toBe(
        'https://pokeapi.co/api/v2/pokemon/?offset=6&limit=6'
      );
      expect(response.count).toBe(1118);
      expect(response.previous).toBe(null);
      expect(response.results.length).toBe(6);
    });
    const req = httpController.expectOne(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6'
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('offset')).toEqual('0');
    expect(req.request.params.get('limit')).toEqual('6');

    req.flush(listPokemonsMock);
  });

  it('should get pokemon by name', () => {
    const searchValue = 'aass';
    const pokemon = pokemonMock;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    service.findByName(searchValue).subscribe((response) => {
      expect(response.name).toBe('aabb');
      expect(response.id).toBe(1);
      expect(response.types.length).toBe(1);
    });
    const req = httpController.expectOne(url);

    expect(req.request.method).toBe('GET');

    req.flush(pokemon);
  });

  it('should get pokemon by ID', () => {
    const id = 1;
    const pokemon = pokemonMock;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    service.findById(id).subscribe((response) => {
      expect(response.name).toBe('aabb');
      expect(response.id).toBe(1);
      expect(response.types.length).toBe(1);
    });
    const req = httpController.expectOne(url);

    expect(req.request.method).toBe('GET');

    req.flush(pokemon);
  });

  afterEach(() => {
    httpController.verify();
  });
});
