export interface PokemonBaseData {
   name: string,
   url: string
}

export interface PokemonInfo {
   count: number,
   next: string | null,
   previous: string | null,
   results: PokemonBaseData[]
}

export interface PokemonType {
   slot: number,
   type: {
      name: string
   }
}

export interface PokemonStat {
   base_stat: number,
   stat: {
      name: string
   }
}

export interface PokemonSprites {
   front_default: string | null,
   front_shiny: string | null
}

export interface PokemonData {
   name: string,
   types: PokemonType[],
   stats: PokemonStat[],
   sprites: PokemonSprites
}

export const emptyPokemonInfo = ():PokemonInfo => ({
   count: 0,
   next: '',
   previous: '',
   results:[]
})

export const emptyPokemonData = (): PokemonData => ({
   name: '',
   types: [],
   stats: [],
   sprites: {
      front_default: '',
      front_shiny: ''
   }
})

export const emptyPokemonResult = (): PokemonBaseData => ({
   name: '',
   url: ''
})