import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PokemonDetailComponent }  from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}



