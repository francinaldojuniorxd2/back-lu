import fs from 'fs';

import File from '../db/models/file.model';
import InvoiceValues from '../db/models/invoice-values.model';
import Invoice from '../db/models/invoice.model';

import { ExtractReturn } from '../entity/extract-return.entity';

interface InsertInvoiceProps {
  mothRef: { value: string };
  numClient: { value: string };
  numInstall: { value: string };
  dateEmiss: { value: string };
  dateNumber: number;
}

interface InsertInvoiceValuesProps {
  energyElectric: { value: string; quantity: string };
  energyIsent: { value: string; quantity: string };
  energyCompensated: { value: string; quantity: string };
  contribIlumPublic: { value: string; quantity?: string };
}

export class RegisterFileData {
  private srcFile: string;
  private fileName: string;

  constructor(srcFile: string, fileName: string) {
    this.srcFile = srcFile;
    this.fileName = fileName;
  }
  private async insertInvoice({
    mothRef,
    numClient,
    numInstall,
    dateNumber,
  }: InsertInvoiceProps): Promise<string | undefined> {
    try {
      const invoice = new Invoice({
        mothRef: mothRef.value,
        numClient: Number(numClient.value),
        numInstall: Number(numInstall.value),
        dateNumber: dateNumber,
      });

      const dataInvoice = await invoice.save();
      return dataInvoice.dataValues.id;
    } catch (error) {
      console.log(error);
      throw new Error('Error to save invoice');
    }
  }

  private async insertInvoiceValues(
    data: InsertInvoiceValuesProps,
    invoiceId?: string,
  ): Promise<void> {
    try {
      const invoiceValues = Object.keys(data).map((key) => {
        const value = parseFloat(
          data[key as keyof typeof data].value
            .replace('.', '')
            .replace(',', '.'),
        );
        const quantity = data[key as keyof typeof data].quantity;
        return new InvoiceValues({
          key: key,
          value: value,
          invoiceId: invoiceId,
          ...(quantity && {
            quantity: parseInt(quantity),
          }),
        });
      });

      await Promise.all(
        invoiceValues.map(async (invoiceValue) => invoiceValue.save()),
      );
    } catch (error) {
      await Invoice.destroy({ where: { id: invoiceId } });
      await InvoiceValues.destroy({ where: { invoiceId } });
      console.log(error);
      throw new Error('Error to save invoice values');
    }
  }

  public async insertFile(invoiceId?: string): Promise<any> {
    try {
      const file = new File({
        name: this.fileName,
        invoiceId: invoiceId,
      });

      return await file.save();
    } catch (error) {
      await Invoice.destroy({ where: { id: invoiceId } });
      await InvoiceValues.destroy({ where: { invoiceId } });
      await fs.unlinkSync(this.srcFile);
      console.log(error);
      throw new Error('Error to save file');
    }
  }

  public async register(data: ExtractReturn): Promise<any> {
    try {
      const { mothRef, numClient, numInstall, dateEmiss, ...rest } = data;
      const invoiceId = await this.insertInvoice({
        mothRef,
        numClient,
        numInstall,
        dateEmiss,
        dateNumber: mothRef.dateNumber,
      });

      if (!invoiceId) throw new Error('Error to save invoice');

      await this.insertInvoiceValues(rest, invoiceId);

      await this.insertFile(invoiceId);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
