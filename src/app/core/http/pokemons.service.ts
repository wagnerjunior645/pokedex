import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { getIdInUrlPokemon } from 'src/app/shared/utils/getIdInUrlPokemon.util';
import { PokemonDetailsModel } from 'src/app/shared/models/pokemonDetail.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  findAll(query: { offset: number; limit: number }): Observable<PaginationModel<PokemonModel[]>> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('offset', query.offset.toString());
    httpParams = httpParams.append('limit', query.limit.toString());
    return this.http
      .get<PaginationModel<PokemonModel[]>>(`${environment.apiUrl}/pokemon` , { params: httpParams })
      .pipe(
        map((paginationModel: PaginationModel<PokemonModel[]>) => {
          paginationModel.results = paginationModel.results.map(
            (pokemon: PokemonModel) => {
              pokemon.id = getIdInUrlPokemon(pokemon.url);
              return pokemon;
            }
          );
          return paginationModel;
        })
      );
  }

  findByName(name: string): Observable<PokemonDetailsModel> {
    return this.http.get<PokemonDetailsModel>(`${environment.apiUrl}/pokemon/${name}`);
  }

  findById(id: number): Observable<PokemonDetailsModel> {
    return this.http.get<PokemonDetailsModel>(`${environment.apiUrl}/pokemon/${id}`);
  }
}
