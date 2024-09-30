import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { PokemonColorDirective } from '../../pokemon-color.directive';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-profile',
  standalone: true,
  imports: [PokemonColorDirective, DatePipe, RouterLink],
  templateUrl: './pokemon-profile.component.html',
  styleUrl: './pokemon-profile.component.scss'
})
export class PokemonProfileComponent {
  readonly route = inject (ActivatedRoute);
  readonly pokemonService = inject(PokemonService);
  readonly pokemonId = Number(this.route.snapshot.paramMap.get('id'));
  readonly pokemonResponse = toSignal(
    this.pokemonService.getPokemonById(this.pokemonId).pipe(
      map((value) => ({value, error:undefined})),
      catchError((error) => of({ value: undefined, error}))
    )
  );
  readonly router = inject(Router);

  readonly loading = computed(() => !this.pokemonResponse());

  readonly error = computed(() => this.pokemonResponse()?.error);

  readonly pokemon = computed(() => this.pokemonResponse()?.value);

  deletePokemon(pokemonId: number) {
    this.pokemonService.deletePokemon(pokemonId).subscribe(() => {
      this.router.navigate(['/pokemons']);
    });
  }
}