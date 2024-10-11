import { Observable } from "rxjs";
import { Resolve } from "@angular/router";
import { PokemonInfo } from "@app/models";
import { Injectable } from "@angular/core";
import { PokemonService } from "@app/services";

@Injectable({ providedIn: 'root' })
export class PokemonResolverService implements Resolve<PokemonInfo> {

  constructor(private service: PokemonService) {}

  resolve(): Observable<PokemonInfo> {
    return this.service.getPokemonDataList();
  }
}