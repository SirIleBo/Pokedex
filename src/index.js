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
const pikachu = new Pokemon('pikachu');
const salameche = new Pokemon('salameche');

myPokedex.addPokemon(pikachu);
myPokedex.addPokemon(salameche);

myPokedex.display();
