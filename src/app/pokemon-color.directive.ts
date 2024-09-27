import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getPokemonColor } from './pokemon.model';

@Directive({
  selector: '[appPokemonColor]',
  standalone: true
})
export class PokemonColorDirective {

  pokemonType = input.required<string>();
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const borderColor = getPokemonColor(this.pokemonType())
    // const backgroundColor = getPokemonBackgroundColor(this.pokemonType())
    // const textColor = getPokemonTextColor(this.pokemonType())
    const color = getPokemonColor(this.pokemonType())
    this.setColor(borderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const borderColor = this.initialColor
    this.setColor(borderColor);
  }

  private setColor(borderColor: string,) {
    this.el.nativeElement.style.borderColor = borderColor;
  }
}
