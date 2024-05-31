import { HasMany, HasOne, Model, Sequelize, Index } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';

import InvoiceValues from './invoice-values.model';
import File from './file.model';

interface InvoiceAttributes {
  id?: string;
  mothRef: string;
  numClient: number;
  numInstall: number;
  invoiceValues?: InvoiceValues[];
  file?: File;
  dateNumber?: number;
}

interface InvoiceCreationAttributes extends Omit<InvoiceAttributes, 'id'> {}

@Table({
  tableName: 'invoice',
  underscored: true,
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['num_client', 'date_number'],
    },
  ],
})
export default class Invoice extends Model<
  InvoiceAttributes,
  InvoiceCreationAttributes
> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: Sequelize.fn('gen_random_uuid'),
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  declare id: string;

  @Column({
    field: 'moth_ref',
    type: DataType.TEXT,
    allowNull: false,
  })
  declare mothRef: string;

  @Column({
    field: 'date_number',
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare dateNumber: number;

  @Column({
    field: 'num_client',
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare numClient: number;

  @Column({
    field: 'num_install',
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare numInstall: number;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true,
  })
  declare createdAt: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true,
  })
  declare updatedAt: Date;

  @HasOne(() => File, 'invoice_id')
  declare file: File;

  @HasMany(() => InvoiceValues, 'invoice_id')
  declare invoiceValues: InvoiceValues[];
}
