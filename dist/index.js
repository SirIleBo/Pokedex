"use strict";

var _capitalize = _interopRequireDefault(require("capitalize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firstName = (0, _capitalize["default"])('cyril');
var greetings = "Hello ".concat(firstName);
console.log(greetings);