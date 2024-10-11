import { ActivatedRoute } from '@angular/router';
import { PokeCardComponent } from '@app/components';
import { Component, inject, OnInit } from '@angular/core';
import { emptyPokemonInfo, PokemonInfo } from '@app/models';
import { PokemonService, UtilitiesService } from '@app/services';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [PokeCardComponent, MatPaginatorModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent implements OnInit {
  pokemonDataList: PokemonInfo = emptyPokemonInfo();
  pokemonService = inject(PokemonService);
  utilitiesService = inject(UtilitiesService);

  constructor(
    private activatedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({dataPokemon})=> {
      this.pokemonDataList = dataPokemon;
    })
  }

  loadPokemon(pageEvent: PageEvent){
    const paginationParams = this.utilitiesService.calculatePaginator(pageEvent.pageSize, pageEvent.pageIndex);

    this.pokemonService.getPokemonDataList(paginationParams).subscribe(pokemonDataResult => {
      this.pokemonDataList = pokemonDataResult
    })
  }

}
