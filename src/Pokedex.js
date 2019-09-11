import capitalize from 'capitalize';
import chalk from 'chalk';

export default class Pokedex {
  constructor(name) {
    this.trainerName = capitalize(name);
    this.pokemons = [];
  }

  welcome() {
    return chalk.blue(`Welcome ${this.trainerName}!`);
  }

  display() {
    const pokedexDisplay = this.pokemons.reduce(
      (previousPokedexDisplay, pokemon) =>
        `${previousPokedexDisplay}\n${pokemon.display()}`,
      this.welcome()
    );
    console.log(pokedexDisplay);
  }

  addPokemon(pokemon) {
    this.pokemons.push(pokemon);
  }
}
