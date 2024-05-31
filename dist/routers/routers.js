"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _upload = _interopRequireDefault(require("./upload"));
var _download = _interopRequireDefault(require("./download"));
var _invoice = _interopRequireDefault(require("./invoice"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const routers = [{
  path: '/upload',
  component: _upload.default
}, {
  path: '/files',
  component: _download.default
}, {
  path: '/invoice',
  component: _invoice.default
}];
var _default = exports.default = routers;