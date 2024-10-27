import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServiceProvider } from './entities/service.provider';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService, ...ServiceProvider],
})
export class ServicesModule {}
