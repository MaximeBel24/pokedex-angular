import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { PokemonColorDirective } from '../../pokemon-color.directive';
import { DatePipe } from '@angular/common';

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
  readonly pokemon = signal(this.pokemonService.getPokemonById(this.pokemonId)).asReadonly();
}
