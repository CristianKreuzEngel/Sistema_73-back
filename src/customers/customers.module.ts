import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import {CustomerProvider} from "./entities/customer.provider";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, ...CustomerProvider],
})
export class CustomersModule {}
