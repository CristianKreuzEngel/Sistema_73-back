import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: 'products'})
export class Product extends Model<Product>{
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
        type: DataType.NUMBER,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.STRING(4),
        allowNull: false,
    })
    voltage: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    cod: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    image: string;

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
