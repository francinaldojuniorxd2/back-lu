"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _routers = _interopRequireDefault(require("./routers/routers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const server = (0, _express.default)();
server.use((0, _cors.default)());
server.options('*', (0, _cors.default)());
server.use(_express.default.json());
_routers.default.forEach(route => {
  server.use(route.path, route.component);
});
var _default = exports.default = server;