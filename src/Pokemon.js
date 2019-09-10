import capitalize from 'capitalize';

export default class Pokemon {
  constructor(name) {
    this.name = capitalize(name);
  }

  attack() {
    console.info(`${this.name} attack !`);
  }
}
