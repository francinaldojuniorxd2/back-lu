import { Router } from 'express';

import { sequelize } from '../db/config';
import Invoice from '../db/models/invoice.model';
import InvoiceValues from '../db/models/invoice-values.model';
import File from '../db/models/file.model';

const router = Router();

router.get('/invoice/:numClientId', async (request, response) => {
  try {
    const respoInvoice = await sequelize.query(
      `SELECT DISTINCT i.num_client FROM invoice as i WHERE cast (i.num_client as text) like '%${request.params.numClientId}%' limit 10`,
      {
        model: Invoice,
        mapToModel: true,
        type: 'SELECT',
      },
    );

    return response.send(respoInvoice.map((invoice) => invoice.dataValues));
  } catch (error) {
    console.log(error);
  }
});

router.get('/invoice/dashboard/:numClientId', async (request, response) => {
  const data = await Invoice.findAll({
    order: [['date_number', 'DESC', 'NULLS LAST']],
    where: {
      numClient: request.params.numClientId,
    },
    include: [
      {
        model: InvoiceValues,
        as: 'invoiceValues',
      },
    ],
  });

  const mappInvoice = data.map((invoice: any) => {
    const totais = invoice?.dataValues?.invoiceValues.reduce(
      (acc: any, invoiceValues: any) => {
        const data = invoiceValues.dataValues;

        return {
          ...acc,
          totalConsumed: ['energyElectric', 'energyIsent'].includes(
            `${data.key}`,
          )
            ? acc.totalConsumed
              ? acc.totalConsumed + data.quantity
              : data.quantity
            : acc.totalConsumed,
          compensatedEnergy: ['energyCompensated'].includes(`${data.key}`)
            ? acc.compensatedEnergy
              ? acc.compensatedEnergy + data.quantity
              : data.quantity
            : acc.compensatedEnergy,
          totalValue: [
            'energyElectric',
            'energyIsent',
            'contribIlumPublic',
          ].includes(data.key)
            ? acc.totalValue
              ? acc.totalValue + parseFloat(data.value)
              : parseFloat(data.value)
            : acc.totalValue,
          economyGd: ['energyCompensated'].includes(`${data.key}`)
            ? acc.economyGd
              ? acc.economyGd + parseFloat(data.value)
              : parseFloat(data.value)
            : acc.economyGd,
        };
      },
      {},
    );

    return {
      ...invoice.dataValues,
      total: totais,
    };
  });

  return response.send(mappInvoice);
});

router.get('/invoice/files/:numClientId', async (request, response) => {
  const data = await Invoice.findAll({
    order: [['date_number', 'DESC', 'NULLS LAST']],
    where: {
      numClient: request.params.numClientId,
    },
    include: [
      {
        model: File,
        as: 'file',
      },
    ],
  });

  return response.send(data);
});

export default router;
