import { Module } from '@nestjs/common';
import { RequestXproductsService } from './request-xproducts.service';
import { RequestXproductsController } from './request-xproducts.controller';

@Module({
  controllers: [RequestXproductsController],
  providers: [RequestXproductsService],
})
export class RequestXproductsModule {}
