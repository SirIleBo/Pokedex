import capitalize from 'capitalize';

export default class Pokedex {
  constructor(name) {
    this.trainerName = capitalize(name);
    this.pokemons = [];
  }

  welcome() {
    return `Welcome ${this.trainerName}!`;
  }

  display() {
    const pokedexDisplay = this.pokemons.reduce(
      (previousPokedexDisplay, pokemon) =>
        `${previousPokedexDisplay}\n${pokemon.name}`,
      this.welcome()
    );
    console.log(pokedexDisplay);
  }

  addPokemon(pokemon) {
    this.pokemons.push(pokemon);
  }
}
