import { PokemonService } from '@app/services';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { emptyPokemonData, PokemonData } from '@app/models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-dialog',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-dialog.component.html',
  styleUrl: './pokemon-dialog.component.scss'
})
export class PokemonDialogComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<PokemonDialogComponent>);
  readonly dialogData = inject<{apiPath: string}>(MAT_DIALOG_DATA);
  pokemonData: PokemonData = emptyPokemonData();
  pokemonService = inject(PokemonService);

  ngOnInit(){
    this.pokemonService.getPokemonData(this.dialogData.apiPath).subscribe( pokemonResult => {
      this.pokemonData = pokemonResult;
      console.log(this.pokemonData);
    })
  }

}
