"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _express = require("express");
var _multer2 = require("../config/multer");
var _extracData = _interopRequireDefault(require("../service/extrac-data"));
var _registerFileData = require("../service/register-file-data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = (0, _express.Router)();
const upload = (0, _multer.default)({
  storage: _multer2.storage
});
router.post('/', upload.single('file'), async (request, response) => {
  const fileName = request?.file?.filename;
  if (!fileName) return response.status(400).json({
    message: 'File not found'
  });
  const pathFile = `/files/${fileName}`;
  const extracData = new _extracData.default();
  const registerFileData = new _registerFileData.RegisterFileData(pathFile, fileName);
  try {
    const pdfFileValues = await extracData.extract(pathFile);
    await registerFileData.register(pdfFileValues);
    return response.json(request?.file?.filename);
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      message: error.message
    });
  }
});
var _default = exports.default = router;