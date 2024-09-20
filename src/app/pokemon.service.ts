import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  //Retourne la liste des pokemons

  getPokemonList(): PokemonList{
    return POKEMON_LIST;
  }

  //Retourne la liste des pokemons dont le nom contient la chaine de caractères passée en paramètre

  getPokemonListByNamesContain(name: string): PokemonList{
    return POKEMON_LIST.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  }

  //Retourne un pokemon en fonction de son id

  getPokemonById(id: number): Pokemon{
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);

    if (!pokemon) {
      throw new Error('No Pokemon found with id ' + id)
    }

    return pokemon;
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
      'Combat',
      'Sol',
      'Roche',
      'Spectre',
      'Acier',
      'Glace',
      'Dragon',
      'Ténèbres',
      'Psy'
    ]
  }
}
