import { Test, TestingModule } from '@nestjs/testing';
import { RequestXproductsController } from './request-xproducts.controller';
import { RequestXproductsService } from './request-xproducts.service';

describe('RequestXproductsController', () => {
  let controller: RequestXproductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestXproductsController],
      providers: [RequestXproductsService],
    }).compile();

    controller = module.get<RequestXproductsController>(RequestXproductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
