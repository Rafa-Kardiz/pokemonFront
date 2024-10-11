import { Routes } from '@angular/router';
import { PokemonResolverService } from './resolvers';

export const routes: Routes = [
   {
      path: "home",
      loadComponent: ()=> import('@app/pages/home/home.component').then(m=> m.HomeComponent),
      resolve: {dataPokemon: PokemonResolverService}
   },
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   }
];
