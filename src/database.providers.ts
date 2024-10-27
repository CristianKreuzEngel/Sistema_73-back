import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Service } from './services/entities/service.entity';
import { Order } from './orders/entities/order.entity';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([User, Product, Service, Order]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
