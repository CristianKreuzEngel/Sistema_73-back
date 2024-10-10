import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UsersProviders } from './users/entities/user.provider';
import { ProductsModule } from './products/products.module';
import {ProductProvider} from "./products/entities/product.provider";

@Module({
  imports: [UsersModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [
      ...databaseProviders,
      ...UsersProviders,
      ...ProductProvider,
    ],
})
export class AppModule {}
