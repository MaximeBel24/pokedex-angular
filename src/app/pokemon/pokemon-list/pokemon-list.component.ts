import { Component, computed, inject, signal } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon.model';
import { PokemonColorDirective } from '../../pokemon-color.directive';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonColorDirective, DatePipe, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  private readonly pokemonService = inject(PokemonService);

  readonly pokemonList = toSignal(this.pokemonService.getPokemonList());
  readonly loading = computed(() => !this.pokemonList());
  readonly pokemonListFiltered = computed(() => {
    return this.pokemonList()?.filter((pokemon) =>
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
}
