import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

/**
 * @example
 *
 * const myPokedex = new myPokedex();
 * const pikachu = new Pokemon();
 * const bulbizarre = new Pokemon();
 *
 * myPokedex.addPokemon(pikachu);
 * myPokedex.addPokemon(bulbizarre);
 *
 */

const myPokedex = new Pokedex('cyril');
myPokedex.welcome();
myPokedex.display();
const pikachu = new Pokemon('pikachu');
myPokedex.addPokemon(pikachu);

myPokedex.display();
