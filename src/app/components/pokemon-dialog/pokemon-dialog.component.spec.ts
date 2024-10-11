import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonDialogComponent } from './pokemon-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from '@app/services';
import { PokemonData } from '@app/models';

describe('PokemonDialogComponent', () => {
  let component: PokemonDialogComponent;
  let fixture: ComponentFixture<PokemonDialogComponent>;
  let pokemonServiceMock: any;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const mockDialogData = {
    apiPath: 'https://pokeapi.co/api/v2/pokemon/1'
  };

  const mockPokemonData: PokemonData = {
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass'
        }
      }
    ],
    sprites: {
      front_default: 'bulbasaur-image-url',
      front_shiny: 'bulbasaur-image-url'
    },
    stats: [
      {
        base_stat: 50,
        stat: {
          name: 'hp'
        }
      }
    ]
  };

  beforeEach(async () => {
    pokemonServiceMock = jasmine.createSpyObj('PokemonService', ['getPokemonData']);
    pokemonServiceMock.getPokemonData.and.returnValue(of(mockPokemonData)); // Simula la respuesta del servicio

    await TestBed.configureTestingModule({
      imports: [PokemonDialogComponent], // Aquí va el componente standalone en lugar de declarations
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: PokemonService, useValue: pokemonServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemon data on init', () => {
    expect(component.pokemonData).toEqual(mockPokemonData);
    expect(pokemonServiceMock.getPokemonData).toHaveBeenCalledWith(mockDialogData.apiPath);
  });

  it('should close the dialog when close is called', () => {
    component.dialogRef.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
