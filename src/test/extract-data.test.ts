import e from 'express';
import path from 'path';

import ExtractDataPdf from '../service/extrac-data';
import { getSettingsPdfExtractMock } from './mocks/settings-mock.test';
import { expectValueMock } from './mocks/pdf-extract-mock.test';

jest.mock('../db/models/setting.model', () => {
  return {
    findOne: () => getSettingsPdfExtractMock,
  };
});

describe('extract-data', () => {
  it('should return values!', async () => {
    const extracDataPdf = new ExtractDataPdf();

    const pathFile = path.resolve(__dirname, './files/01.pdf');
    const result = await extracDataPdf.extract(pathFile);

    expect(result).toEqual(expectValueMock);
  });
});
