import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'customers' })
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
  })
  address: string;

  @Column({
    type: DataType.STRING(19),
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING(18),
    allowNull: false,
  })
  documents: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: string;
}
