import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UsersProviders } from './users/entities/user.provider';
import { ProductsModule } from './products/products.module';
import { ProductProvider } from './products/entities/product.provider';
import { CheckTokenMiddleware } from './middleware/checkToken.middleware';
import { OrdersModule } from './orders/orders.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, OrdersModule, ServicesModule],
  controllers: [],
  providers: [...databaseProviders, ...UsersProviders, ...ProductProvider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(CheckTokenMiddleware)
      .exclude({ path: 'auth/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
