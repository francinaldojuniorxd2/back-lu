"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const storage = exports.storage = _multer.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/files');
  },
  filename: (req, file, cb) => {
    const time = new Date().getTime();
    cb(null, `${time}-${file.originalname}`);
  }
});