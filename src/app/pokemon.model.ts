export interface Pokemon {
    id: number
    name: string
    picture: string
    life: number
    damage: number
    types: [string, string?, string?]
    created: Date
}

export type PokemonList = Pokemon[];

// export function getPokemonBorderColor(type: string){
//     switch (type) {
//         case 'Feu':
//           return '#EF5350';
//         case 'Eau':
//           return '#42A5F5';
//         case 'Plante':
//           return '#66BB6A';
//         case 'Insecte':
//           return '#8d6e63';
//         case 'Vol':
//           return '#90CAF9';
//         case 'Poison':
//           return '#b388ff';
//         case 'Fée':
//           return '#f8bbd0';
//         case 'Electrik':
//           return '#f4ff81';
//         case 'Sol' :
//           return '#92501b';
//         default:
//           return '#303030';
//       }
// }

// export function getPokemonBackgroundColor(type: string) {
//   switch (type) {
//     case 'Feu':
//       return 'hsl(0, 100%, 60%)';
//     case 'Eau':
//       return 'hsl(240, 100%, 70%)';
//     case 'Plante':
//       return 'hsl(120, 100%, 40%';
//     case 'Insecte':
//       return '#D7CCC8';
//     case 'Vol':
//       return '#E3F2FD';
//     case 'Poison':
//       return 'hsl(300, 100%, 30%)';
//     case 'Fée':
//       return '#FCE4EC';
//     case 'Electrik':
//       return 'hsl(60, 100%, 50%)';
//       case 'Sol' :
//         return 'rgba(146, 80, 27, 0.2)';
//     default:
//       return 'rgba(48, 48, 48, 0.2)';
//   }
// }

// export function getPokemonTextColor(type: string){
//   switch(type) {
//     case 'Electrik':
//       return '#111'
//     default:
//       return ''
//   }
// }

export function getPokemonColor(type: string) {
  switch (type) {
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
    default:
      return '#303030';
  }
}