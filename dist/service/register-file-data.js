"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterFileData = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _file = _interopRequireDefault(require("../db/models/file.model"));
var _invoiceValues = _interopRequireDefault(require("../db/models/invoice-values.model"));
var _invoice = _interopRequireDefault(require("../db/models/invoice.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class RegisterFileData {
  constructor(srcFile, fileName) {
    this.srcFile = void 0;
    this.fileName = void 0;
    this.srcFile = srcFile;
    this.fileName = fileName;
  }
  async insertInvoice({
    mothRef,
    numClient,
    numInstall,
    dateNumber
  }) {
    try {
      const invoice = new _invoice.default({
        mothRef: mothRef.value,
        numClient: Number(numClient.value),
        numInstall: Number(numInstall.value),
        dateNumber: dateNumber
      });
      const dataInvoice = await invoice.save();
      return dataInvoice.dataValues.id;
    } catch (error) {
      console.log(error);
      throw new Error('Error to save invoice');
    }
  }
  async insertInvoiceValues(data, invoiceId) {
    try {
      const invoiceValues = Object.keys(data).map(key => {
        const value = parseFloat(data[key].value.replace('.', '').replace(',', '.'));
        const quantity = data[key].quantity;
        return new _invoiceValues.default({
          key: key,
          value: value,
          invoiceId: invoiceId,
          ...(quantity && {
            quantity: parseInt(quantity)
          })
        });
      });
      await Promise.all(invoiceValues.map(async invoiceValue => invoiceValue.save()));
    } catch (error) {
      await _invoice.default.destroy({
        where: {
          id: invoiceId
        }
      });
      await _invoiceValues.default.destroy({
        where: {
          invoiceId
        }
      });
      console.log(error);
      throw new Error('Error to save invoice values');
    }
  }
  async insertFile(invoiceId) {
    try {
      const file = new _file.default({
        name: this.fileName,
        invoiceId: invoiceId
      });
      return await file.save();
    } catch (error) {
      await _invoice.default.destroy({
        where: {
          id: invoiceId
        }
      });
      await _invoiceValues.default.destroy({
        where: {
          invoiceId
        }
      });
      await _fs.default.unlinkSync(this.srcFile);
      console.log(error);
      throw new Error('Error to save file');
    }
  }
  async register(data) {
    try {
      const {
        mothRef,
        numClient,
        numInstall,
        dateEmiss,
        ...rest
      } = data;
      const invoiceId = await this.insertInvoice({
        mothRef,
        numClient,
        numInstall,
        dateEmiss,
        dateNumber: mothRef.dateNumber
      });
      if (!invoiceId) throw new Error('Error to save invoice');
      await this.insertInvoiceValues(rest, invoiceId);
      await this.insertFile(invoiceId);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
exports.RegisterFileData = RegisterFileData;