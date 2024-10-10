import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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
  fullname: string;

  @Column({
    type: DataType.STRING(255),

    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),

    allowNull: false,
  })
  login: string;

  @Column({
    type: DataType.STRING(255),

    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TINYINT,

    allowNull: false,

    defaultValue: 1,
  })
  isActive: boolean;

  @Column({
    type: DataType.INTEGER,

    allowNull: false,
  })
  idRole: number;

  @Column({
    type: DataType.STRING(255),
  })
  profile: string;

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
