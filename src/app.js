import Pokedex from './Pokedex';
import Pikachu from './Pikachu';
import Salameche from './Salameche';

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

const myPokedex = new Pokedex("trou d'balle");
const john = new Pikachu('premièreDaube'); //pikachu
const paolo = new Salameche('badass'); //salameche

myPokedex.addPokemon(john);
myPokedex.addPokemon(paolo);

myPokedex.display();
