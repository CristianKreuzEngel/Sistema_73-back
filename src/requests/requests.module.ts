import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { RequestProvider } from './entities/request.provider';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService, ...RequestProvider],
})
export class RequestsModule {}
