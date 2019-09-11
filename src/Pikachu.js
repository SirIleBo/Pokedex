import Pokemon, { pokemonTypes as types } from './Pokemon';

export default class Pikachu extends Pokemon {
  constructor(name, type) {
    super(name, types.pikachu);
  }

  /* display() {
    return chalk.red(`${this.name} is a ${pokemonTypes.pikachu.name}`);
  }*/
}
