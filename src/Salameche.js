import Pokemon, { pokemonTypes } from './Pokemon';

export default class Salameche extends Pokemon {
  constructor(name) {
    super(name, pokemonTypes.salameche);
  }

  /* display() {
    return chalk.red(`${this.name} is a ${pokemonTypes.salameche.name}`);
  }*/
}
