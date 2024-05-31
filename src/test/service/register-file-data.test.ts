import path from 'path';

import { RegisterFileData } from '../../service/register-file-data';
import { expectValueMock } from '../mocks/pdf-extract-mock.test';
import Invoice from '../../db/models/invoice.model';

jest.mock('../../db/models/invoice.model', () => {
  return jest.fn().mockImplementation(() => ({
    save: async () => {
      return {
        dataValues: {
          id: '1',
        },
      };
    },
  }));
});

jest.mock('../../db/models/invoice-values.model', () => {
  return jest.fn().mockImplementation(() => ({
    save: async () => {
      return {
        dataValues: {
          id: '1',
        },
      };
    },
  }));
});

jest.mock('../../db/models/file.model', () => {
  return jest.fn().mockImplementation(() => ({
    save: async () => {
      return {
        dataValues: {
          id: '1',
        },
      };
    },
  }));
});

describe('register-file-data', () => {
  it('should return values!', async () => {
    const pathFile = path.resolve(__dirname, './files/01.pdf');
    const registerFileData = new RegisterFileData(pathFile, '01.pdf');

    const result = await registerFileData.register(expectValueMock);

    console.log(result);
  });
});
