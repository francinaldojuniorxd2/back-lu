import { BelongsTo, ForeignKey, Model, Sequelize } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';

import Invoice from './invoice.model';

interface InvoiceValuesAttributes {
  invoiceId?: string;
  quantity?: number;
  value: number;
  key: string;
}

interface InvoiceValuesCreationAttributes
  extends Omit<InvoiceValuesAttributes, 'id'> {}

@Table({
  tableName: 'invoice_values',
  underscored: true,
  timestamps: true,
})
export default class InvoiceValues extends Model<
  InvoiceValuesAttributes,
  InvoiceValuesCreationAttributes
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
    field: 'key',
    type: DataType.TEXT,
    allowNull: false,
  })
  declare key: string;

  @Column({
    field: 'quantity',
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare quantity: number;

  @Column({
    field: 'value',
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare value: number;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true,
  })
  declare createdAt: Date;

  @ForeignKey(() => Invoice)
  @Column({
    field: 'invoice_id',
    type: DataType.UUID,
    allowNull: false,
  })
  declare invoiceId: string;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true,
  })
  declare updatedAt: Date;

  @BelongsTo(() => Invoice, {
    foreignKey: 'invoice_id',
    targetKey: 'id',
  })
  declare invoice: Invoice;
}
