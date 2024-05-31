"use strict";

var _config = require("./db/config");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _config.sequelizeInit)();
_server.default.listen(8001);