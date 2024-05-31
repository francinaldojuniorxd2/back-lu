export const getSettingsPdfExtractMock = {
  dataValues: {
    value: {
      conf: [
        {
          key: 'numInvoice',
          props: ['value'],
          desloc: [4],
          search: 'Nº DA FATURA',
        },
        {
          key: 'mothRef',
          props: ['value'],
          desloc: [6],
          search: 'Referente a',
        },
        {
          key: 'dateVenc',
          props: ['value'],
          desloc: [4],
          search: 'DATA DE VENCIMENTO',
        },
        {
          key: 'numClient',
          props: ['value'],
          desloc: [4],
          search: 'Nº DO CLIENTE',
        },
        {
          key: 'numInstall',
          props: ['value'],
          desloc: [4],
          search: 'Nº DA INSTALAÇÃO',
        },
        {
          key: 'energyElectric',
          props: ['value', 'quantity'],
          desloc: [4, 8],
          search: 'Energia Elétrica',
        },
        {
          key: 'energyIsent',
          props: ['value', 'quantity'],
          desloc: [4, 8],
          search: 'Energia SCEE ISENTA',
        },
        {
          key: 'energyCompensated',
          props: ['value', 'quantity'],
          desloc: [4, 8],
          search: 'Energia compensada GD I',
        },
        {
          key: 'contribIlumPublic',
          props: ['value'],
          desloc: [2],
          search: 'Contrib Ilum Publica Municipal',
        },
      ],
    },
  },
};
