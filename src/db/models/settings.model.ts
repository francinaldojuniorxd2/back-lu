import { Model, Sequelize, DataType } from 'sequelize-typescript';
import { Column, Table } from 'sequelize-typescript';

interface SettingsAttributes {
  id: string;
  name: string;
  value: Record<string, unknown>;
}

interface SettingsCreationAttributes extends Omit<SettingsAttributes, 'id'> {}

@Table({
  tableName: 'setting',
  underscored: true,
  timestamps: true,
})
export default class Settings extends Model<
  SettingsAttributes,
  SettingsCreationAttributes
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
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    field: 'value',
    type: DataType.JSON,
    allowNull: true,
  })
  declare value: JSON;

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
}
