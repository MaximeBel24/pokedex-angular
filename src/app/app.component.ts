import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  name = signal('Pikachu');
  life = signal(21);
  imageSrc = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');
  size = computed(() => {
    if (this.life() <= 15) {
      return 'Petit';
    }

    if (this.life() >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  });

  // counter = signal(0);
  // doubleCounter = computed(() => this.counter() * 2)
  // tripleCounter = computed(() => this.counter() * 3)

  // constructor() {
  //   effect(() => {
  //     console.log('Le compteur a été mis à jour :', this.counter());
  //     console.log('Le compteur double a été mis à jour :', this.doubleCounter());
  //     console.log('Le compteur triple a été mis à jour :', this.tripleCounter());
  //   })
  // }

  incrementLife(){
    this.life.update(n => n + 1);
  }

  decrementLife(){
    this.life.update(n => n - 1);
  }

  // increment(){
  //   this.counter.update(n => n + 1);
  // }

  // reset(){
  //   this.counter.set(0);
  //   console.clear()
  // }
}
