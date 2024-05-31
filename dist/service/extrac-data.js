"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pdf = require("pdf.js-extract");
var _fs = _interopRequireDefault(require("fs"));
var _settings = _interopRequireDefault(require("../db/models/settings.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class ExtractDataPdf {
  constructor() {
    this.getNumberDate = date => {
      if (!date) return null;
      const dateArray = date.split('/');
      const refMoth = {
        JAN: '01',
        FEV: '02',
        MAR: '03',
        ABR: '04',
        MAI: '05',
        JUN: '06',
        JUL: '07',
        AGO: '08',
        SET: '09',
        OUT: '10',
        NOV: '11',
        DEZ: '12'
      };
      return Number(dateArray[1] + refMoth[dateArray[0]]);
    };
  }
  async getSettings() {
    const settingsExtract = await _settings.default.findOne({
      where: {
        name: 'pdfExtract'
      },
      attributes: ['value']
    });
    return settingsExtract?.dataValues?.value?.conf;
  }
  async readFiles(srcFile) {
    const pdfExtract = new _pdf.PDFExtract();
    const options = {}; /* see below */

    if (!_fs.default.existsSync(srcFile)) throw new Error('File not found');
    const pdfBuffer = await _fs.default.readFileSync(srcFile);
    const pdfData = await pdfExtract.extractBuffer(pdfBuffer, options);
    if (pdfData.pages.length === 0 || pdfData.pages.length > 1) throw new Error('Não foi possível extrair o conteúdo do PDF');
    const dataArray = pdfData.pages[0].content.map(item => item.str);
    return dataArray;
  }
  async getValues(dataArray, settings) {
    const searchValues = settings.reduce((acc, item) => {
      const position = dataArray.indexOf(item.search);
      if (position === -1) return acc;
      const values = item.desloc.map(desloc => {
        return dataArray[position + desloc];
      });
      return {
        ...acc,
        [item.key]: values.reduce((a, b, i) => {
          const dateNumber = item.key === 'mothRef' ? this.getNumberDate(b) : {};
          return {
            ...a,
            [item.props[i]]: b,
            ...(dateNumber && {
              dateNumber
            })
          };
        }, {})
      };
    }, {});
    return searchValues;
  }
  async extract(srcFile) {
    const settingsExtract = await this.getSettings();
    const pdfDataArray = await this.readFiles(srcFile);
    const values = this.getValues(pdfDataArray, settingsExtract);
    return values;
  }
}
exports.default = ExtractDataPdf;