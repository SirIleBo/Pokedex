"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _capitalize = _interopRequireDefault(require("capitalize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pokedex =
/*#__PURE__*/
function () {
  function Pokedex(name) {
    _classCallCheck(this, Pokedex);

    this.trainerName = (0, _capitalize["default"])(name);
    this.pokemons = [];
  }

  _createClass(Pokedex, [{
    key: "welcome",
    value: function welcome() {
      return "Welcome ".concat(this.trainerName, "!");
    }
  }, {
    key: "display",
    value: function display() {
      //this.pokemons.forEach(pokemon => console.log(pokemon.name));
      var pokedexDisplay = this.pokemons.reduce(function (previousPokedexDisplay, pokemon) {
        return "".concat(previousPokedexDisplay, "\n").concat(pokemon.name);
      }, this.welcome());
      console.log(pokedexDisplay);
    }
  }, {
    key: "addPokemon",
    value: function addPokemon(pokemon) {
      this.pokemons.push(pokemon);
    }
  }]);

  return Pokedex;
}();

exports["default"] = Pokedex;