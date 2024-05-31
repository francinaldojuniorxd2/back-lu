"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.default = void 0;
var _express = require("express");
const router = exports.router = (0, _express.Router)();
router.get('/:filename', (request, response) => {
  response.header(`Content-Disposition: attachment; filename=${request.params.filename}`);
  response.sendFile(`/files/${request.params.filename}`);
});
var _default = exports.default = router;