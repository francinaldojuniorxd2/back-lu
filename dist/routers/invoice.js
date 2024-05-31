"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _config = require("../db/config");
var _invoice = _interopRequireDefault(require("../db/models/invoice.model"));
var _invoiceValues = _interopRequireDefault(require("../db/models/invoice-values.model"));
var _file = _interopRequireDefault(require("../db/models/file.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = (0, _express.Router)();
router.get('/:numClientId', async (request, response) => {
  try {
    const respoInvoice = await _config.sequelize.query(`SELECT DISTINCT i.num_client FROM invoice as i WHERE cast (i.num_client as text) like '%${request.params.numClientId}%' limit 10`, {
      model: _invoice.default,
      mapToModel: true,
      type: 'SELECT'
    });
    return response.send(respoInvoice.map(invoice => invoice.dataValues));
  } catch (error) {
    console.log(error);
  }
});
router.get('/dashboard/:numClientId', async (request, response) => {
  const data = await _invoice.default.findAll({
    order: [['date_number', 'DESC', 'NULLS LAST']],
    where: {
      numClient: request.params.numClientId
    },
    include: [{
      model: _invoiceValues.default,
      as: 'invoiceValues'
    }]
  });
  const mappInvoice = data.map(invoice => {
    const totais = invoice?.dataValues?.invoiceValues.reduce((acc, invoiceValues) => {
      const data = invoiceValues.dataValues;
      return {
        ...acc,
        totalConsumed: ['energyElectric', 'energyIsent'].includes(`${data.key}`) ? acc.totalConsumed ? acc.totalConsumed + data.quantity : data.quantity : acc.totalConsumed,
        compensatedEnergy: ['energyCompensated'].includes(`${data.key}`) ? acc.compensatedEnergy ? acc.compensatedEnergy + data.quantity : data.quantity : acc.compensatedEnergy,
        totalValue: ['energyElectric', 'energyIsent', 'contribIlumPublic'].includes(data.key) ? acc.totalValue ? acc.totalValue + parseFloat(data.value) : parseFloat(data.value) : acc.totalValue,
        economyGd: ['energyCompensated'].includes(`${data.key}`) ? acc.economyGd ? acc.economyGd + parseFloat(data.value) : parseFloat(data.value) : acc.economyGd
      };
    }, {});
    return {
      ...invoice.dataValues,
      total: totais
    };
  });
  return response.send(mappInvoice);
});
router.get('/files/:numClientId', async (request, response) => {
  const data = await _invoice.default.findAll({
    order: [['date_number', 'DESC', 'NULLS LAST']],
    where: {
      numClient: request.params.numClientId
    },
    include: [{
      model: _file.default,
      as: 'file'
    }]
  });
  return response.send(data);
});
var _default = exports.default = router;