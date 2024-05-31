import { PDFExtract } from 'pdf.js-extract';
import path from 'path';
import fs from 'fs';

import Settings from '../db/models/settings.model';

interface ExtractProps {
  value: string;
  quantity: string;
}

interface ExtractReturn {
  dateEmiss: { value: string };
  mothRef: { value: string; dateNumber: number };
  numClient: { value: string };
  numInstall: { value: string };
  energyElectric: { value: string; quantity: string };
  energyIsent: { value: string; quantity: string };
  energyCompensated: { value: string; quantity: string };
  contribIlumPublic: { value: string; quantity: string };
}

export default class ExtractDataPdf {
  private async getSettings() {
    const settingsExtract = await Settings.findOne({
      where: {
        name: 'pdfExtract',
      },
      attributes: ['value'],
    });

    return settingsExtract?.dataValues?.value?.conf;
  }

  private getNumberDate = (date: string) => {
    if (!date) return null;
    const dateArray: string[] = date.split('/');

    const refMoth: { [x: string]: string } = {
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
      DEZ: '12',
    };
    return Number(dateArray[1] + refMoth[dateArray[0]]);
  };

  private async readFiles(srcFile: string) {
    const pdfExtract = new PDFExtract();
    const options = {}; /* see below */

    if (!fs.existsSync(srcFile)) throw new Error('File not found');

    const pdfBuffer = await fs.readFileSync(srcFile);

    const pdfData = await pdfExtract.extractBuffer(pdfBuffer, options);

    if (pdfData.pages.length === 0 || pdfData.pages.length > 1)
      throw new Error('Não foi possível extrair o conteúdo do PDF');

    const dataArray = pdfData.pages[0].content.map((item) => item.str);

    return dataArray;
  }

  private async getValues(dataArray: string[], settings: any) {
    const searchValues = settings.reduce((acc: {}, item: any) => {
      const position = dataArray.indexOf(item.search);
      if (position === -1) return acc;
      const values = item.desloc.map((desloc: number) => {
        return dataArray[position + desloc];
      });

      return {
        ...acc,
        [item.key]: values.reduce((a: {}, b: any, i: any) => {
          const dateNumber =
            item.key === 'mothRef' ? this.getNumberDate(b) : {};

          return {
            ...a,
            [item.props[i]]: b,
            ...(dateNumber && { dateNumber }),
          };
        }, {}),
      };
    }, {});

    return searchValues;
  }

  public async extract(srcFile: string): Promise<ExtractReturn> {
    const settingsExtract = await this.getSettings();
    const pdfDataArray = await this.readFiles(srcFile);
    const values = this.getValues(pdfDataArray, settingsExtract);

    return values;
  }
}
