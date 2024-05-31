import { BelongsTo, ForeignKey, Model, Sequelize } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';

import Invoice from './invoice.model';

interface FileAttributes {
  name: string;
  invoiceId?: string;
}

interface FileCreationAttributes extends Omit<FileAttributes, 'id'> {}

@Table({
  tableName: 'file',
  underscored: true,
  timestamps: true,
})
export default class File extends Model<
  FileAttributes,
  FileCreationAttributes
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
    field: 'name',
    type: DataType.TEXT,
    allowNull: false,
  })
  declare name: string;

  @Column({
    field: 'content_type',
    type: DataType.TEXT,
    allowNull: true,
  })
  declare contentType: string;

  @ForeignKey(() => Invoice)
  @Column({
    field: 'invoice_id',
    type: DataType.UUID,
    allowNull: false,
  })
  declare invoiceId: string;

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

  @BelongsTo(() => Invoice, {
    foreignKey: 'invoice_id',
    targetKey: 'id',
  })
  declare invoice: Invoice;
}
