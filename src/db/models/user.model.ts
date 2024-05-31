import { Optional } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

export const UserN = 'Not a model';
export const NUser = 'Not a model';

interface PersonAttributes {
  id: number;
  name: string;
}
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'user',
})
export default class User extends Model<
  PersonAttributes,
  PersonCreationAttributes
> {
  @Column
  declare name: string;

  @Column
  declare birthday: Date;
}
