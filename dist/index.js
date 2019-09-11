"use strict";

var _Pokedex = _interopRequireDefault(require("./Pokedex"));

var _Pikachu = _interopRequireDefault(require("./Pikachu"));

var _Salameche = _interopRequireDefault(require("./Salameche"));

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
var myPokedex = new _Pokedex["default"]("trou d'balle");
var john = new _Pikachu["default"]('premièreDaube'); //pikachu

var paolo = new _Salameche["default"]('badass'); //salameche

myPokedex.addPokemon(john);
myPokedex.addPokemon(paolo);
myPokedex.display();