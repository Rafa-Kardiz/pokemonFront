import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonData, PokemonInfo } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseApiUrl = 'https://pokeapi.co/api/v2/pokemon';
  httpClient = inject(HttpClient);

  getPokemonDataList(paginationParams: string = ''): Observable<PokemonInfo> {
    const apiPath = `${this.baseApiUrl}${paginationParams}`;
    return this.httpClient.get<PokemonInfo>(apiPath);
  }

  getPokemonData(apiPath: string): Observable<PokemonData>{
    return this.httpClient.get<PokemonData>(apiPath);
  }

}
