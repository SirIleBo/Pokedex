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

var Pokemon =
/*#__PURE__*/
function () {
  function Pokemon(name) {
    _classCallCheck(this, Pokemon);

    this.name = (0, _capitalize["default"])(name);
  }

  _createClass(Pokemon, [{
    key: "attack",
    value: function attack() {
      console.info("".concat(this.name, " attack !"));
    }
  }]);

  return Pokemon;
}();

exports["default"] = Pokemon;