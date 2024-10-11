import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { emptyPokemonResult, PokemonBaseData } from '@app/models';
import { PokemonDialogComponent } from '@app/components';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input() pokemonBaseData: PokemonBaseData = emptyPokemonResult();
  readonly dialog = inject(MatDialog)


  openDialog(apiPath: string){
    this.dialog.open(PokemonDialogComponent, {
      data: {
        apiPath: apiPath
      },
      width: '40%',
      height: '80%',
      minWidth: '250px',
      maxWidth: '400px'
    });
  }

}
