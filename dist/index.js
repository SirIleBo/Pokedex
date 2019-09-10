"use strict";

var _Pokedex = _interopRequireDefault(require("./Pokedex"));

var _Pokemon = _interopRequireDefault(require("./Pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var myPokedex = new _Pokedex["default"]('cyril');
myPokedex.welcome();
myPokedex.display();
var pikachu = new _Pokemon["default"]('pikachu');
myPokedex.addPokemon(pikachu);
myPokedex.display();