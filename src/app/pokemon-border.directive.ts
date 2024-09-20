import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true
})
export class PokemonBorderDirective {
  pokemonType = input.required<string>();
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const borderColor = this.getBorderColor();
    const backgroundColor = this.getBackGroundColor();
    this.setColor(borderColor, backgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const borderColor = this.initialColor
    const backgroundColor = this.initialColor
    this.setColor(borderColor, backgroundColor)
  }

  private setColor(borderColor: string, backgroundColor: string) {
    this.el.nativeElement.style.borderColor = borderColor;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }

  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42A5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison':
        return '#b388ff';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      case 'Sol' :
        return '#92501b';
      default:
        return '#303030';
    }
  }

  private getBackGroundColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#FFEBEE';
      case 'Eau':
        return '#E3F2FD';
      case 'Plante':
        return '#E8F5E9';
      case 'Insecte':
        return '#D7CCC8';
      case 'Vol':
        return '#E3F2FD';
      case 'Poison':
        return '#E1BEE7';
      case 'Fée':
        return '#FCE4EC';
      case 'Electrik':
        return '#FFF9C4';
        case 'Sol' :
          return 'rgba(146, 80, 27, 0.2)';
      default:
        return 'rgba(48, 48, 48, 0.2)';
    }
  }
}
