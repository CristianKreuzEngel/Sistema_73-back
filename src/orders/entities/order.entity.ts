import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Service } from '../../services/entities/service.entity';

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
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
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone: string;

  @ForeignKey(() => Service)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idService;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  problemDescription: string;

  @Column({
    type: DataType.STRING(255),
  })
  technicalDescription: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  equipment: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  budget: boolean;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  totalValue: number;

  @Column({
    type: DataType.STRING(255),
  })
  accessories: string;

  @Column({
    type: DataType.STRING(255),
  })
  mistake: string;

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
  expectedDate: string;

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
