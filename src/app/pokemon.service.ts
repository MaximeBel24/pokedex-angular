import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  private readonly http = inject(HttpClient);
  private readonly POKEMON_API_URL = 'http://localhost:3000/pokemons'

  //Retourne la liste des pokemons
  getPokemonList(): Observable<PokemonList>{
    return this.http.get<PokemonList>(this.POKEMON_API_URL);
  }

  //Retourne un pokemon en fonction de son id

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.POKEMON_API_URL}/${id}`);
  }  

  // Met à jour un pokémon existant.

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.POKEMON_API_URL}/${pokemon.id}`, pokemon);
  }

  // Supprime un pokémon.
  
  deletePokemon(pokemonId: number): Observable<void> {
    return this.http.delete<void>(`${this.POKEMON_API_URL}/${pokemonId}`);
  }

  // Retourne la liste des types valides pour un pokémon.

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Vol',
      'Poison',
      'Fée',
      'Electrik',
      'Normal',
      'Sol',
      // 'Combat',
      // 'Roche',
      // 'Spectre',
      // 'Acier',
      // 'Glace',
      // 'Dragon',
      // 'Ténèbres',
      // 'Psy'
    ]
  }
}
