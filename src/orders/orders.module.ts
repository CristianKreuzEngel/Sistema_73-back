import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import {OrderProvider} from "./entities/order.provider";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ...OrderProvider],
})
export class OrdersModule {}
