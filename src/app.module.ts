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
import { OrderProvider } from './orders/entities/order.provider';
import { ServiceProvider } from './services/entities/service.provider';
import { CustomersModule } from './customers/customers.module';
import { RequestsModule } from './requests/requests.module';
import { CustomerProvider } from './customers/entities/customer.provider';
import { RequestProvider } from './requests/entities/request.provider';
import { RequestXproductsModule } from './request-xproducts/request-xproducts.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
    ServicesModule,
    CustomersModule,
    RequestsModule,
    RequestXproductsModule,
  ],
  controllers: [],
  providers: [
    ...databaseProviders,
    ...UsersProviders,
    ...ProductProvider,
    ...OrderProvider,
    ...ServiceProvider,
    ...CustomerProvider,
    ...RequestProvider,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(CheckTokenMiddleware)
      .exclude({ path: 'auth/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
