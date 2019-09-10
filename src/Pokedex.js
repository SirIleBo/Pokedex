import capitalize from 'capitalize';

export default class Pokedex {
  constructor(name) {
    this.trainerName = capitalize(name);
    this.pokemons = [];
  }

  welcome() {
    console.log(`Welcome ${this.trainerName}!`);
  }

  display() {
    this.pokemons.forEach(pokemon => console.log(pokemon.name));
  }

  addPokemon(pokemon) {
    this.pokemons.push(pokemon);
  }
}
