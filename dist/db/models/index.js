"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _file = _interopRequireDefault(require("./file.model"));
var _invoiceValues = _interopRequireDefault(require("./invoice-values.model"));
var _invoice = _interopRequireDefault(require("./invoice.model"));
var _settings = _interopRequireDefault(require("./settings.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = [_file.default, _invoiceValues.default, _invoice.default, _settings.default];