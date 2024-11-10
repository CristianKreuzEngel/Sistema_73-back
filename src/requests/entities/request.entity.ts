import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customers/entities/customer.entity';
import { Product } from '../../products/entities/product.entity';

@Table({ tableName: 'requests' })
export class Request extends Model<Request> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  idCustomer: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  idProduct: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qtd: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  totalValue: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING(255),
  })
  observation: string;

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
