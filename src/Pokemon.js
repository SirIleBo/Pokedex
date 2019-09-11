import capitalize from 'capitalize';
import chalk from 'chalk';

export default class Pokemon {
  constructor(name, type) {
    this.name = capitalize(name);
    this.type = type;
  }

  attack() {
    console.info(`${this.name} attack !`);
  }

  display() {
    const name = chalk[this.type.color](`${this.name}`);
    return `${name} is a ${this.type.name}`;
  }
}

export const pokemonTypes = {
  pikachu: {
    name: 'Pikachu',
    color: 'yellow'
  },
  salameche: {
    name: 'Salameche',
    color: 'red'
  }
};
