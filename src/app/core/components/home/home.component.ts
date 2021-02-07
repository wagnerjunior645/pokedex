import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, finalize, take, tap } from 'rxjs/operators';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { getPaginationInURL } from 'src/app/shared/utils/getPaginationInURL.util';
import { PokemonsService } from '../../http/pokemons.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: PokemonModel[] = [];
  pokemonsResponse: Observable<ResponseModel<PokemonModel[]>>;
  response: ResponseModel<PokemonModel[]>;
  isLoading = false;
  errorMessage: string;

  constructor(
    private pokemonsService: PokemonsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.init();
    this.scrollService.detectScrollOnBotton
      .pipe(debounceTime(300))
      .subscribe(() => {
        if (this.response.next) {
          this.init(this.response.next);
        }
      });
  }

  search(searchValue: string): void {
    if (!searchValue) {
      this.init();
      return;
    }
    this.isLoading = true;
    this.pokemonsService
      .findByName(searchValue.toLowerCase())
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(
        (pokemon) => {
          this.pokemons = [
            {
              id: pokemon.id,
              name: pokemon.name,
              url: `/${pokemon.id}/`,
            },
          ];
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.onError(httpErrorResponse);
        }
      );
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.scrollService.touchBotton();
    }
  }

  private init(url?: string): void {
    const queryParams = getPaginationInURL(url);
    this.isLoading = true;
    this.pokemonsService
      .findAll(queryParams)
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(
        (response: ResponseModel<PokemonModel[]>) => {
          this.response = response;
          this.pokemons = this.pokemons.concat(response.results);
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.onError(httpErrorResponse);
        }
      );
  }

  private onError(httpErrorResponse: HttpErrorResponse): void {
    if (httpErrorResponse.status === 404) {
      this.errorMessage = 'Não foi achado nenhum pokemon com esse nome.';
      this.pokemons = [];
      return;
    }
    this.errorMessage =
      'Estamos enfrentando problemas técnicos, tente novamente mais tarde.';
  }
}