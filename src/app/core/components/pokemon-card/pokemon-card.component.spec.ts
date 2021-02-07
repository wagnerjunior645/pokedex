import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemonNumber.pipe';
import { PokemonsService } from '../../http/pokemons.service';
import { pokemonMock } from '../../mock/pokemon.mock';
import { PokemonsServiceMock } from '../../mock/pokemons.service.mock';
import { HomeComponent } from '../home/home.component';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  const pokemon: PokemonModel = { id: pokemonMock.id, name: pokemonMock.name, url: `/${pokemonMock.id}/` };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, PokemonCardComponent, PokemonNumberPipe],
      providers: [{ provide: PokemonsService, useClass: PokemonsServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component.pokemon);
  });

  it('Test Pipe number', () => {
    console.log(component.pokemon);
    expect(component).toBeTruthy();
  });
});
