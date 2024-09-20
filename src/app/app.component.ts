import { Component, computed, effect, inject, signal } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly pokemonService = inject(PokemonService);

  pokemons = computed(() => {
    if(this.searchTerm() === ''){
      return this.pokemonService.getPokemonList();
    }
    return this.pokemonService.getPokemonListByNamesContain(this.searchTerm());
  });

  readonly pokemonList = signal(this.pokemonService.getPokemonList());
  readonly pokemonListFiltered = computed(() => {
    return this.pokemonList().filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())
    );
  }); 

  readonly searchTerm = signal('');

  size(pokemon : Pokemon){
    if (pokemon.life <= 15) {
      return 'Petit';
    }

    if (pokemon.life >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  }

  incrementLife(pokemon: Pokemon){
    pokemon.life = pokemon.life + 1
  }

  decrementLife(pokemon: Pokemon){
    pokemon.life = pokemon.life - 1
  }

}