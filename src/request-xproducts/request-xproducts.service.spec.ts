import { Test, TestingModule } from '@nestjs/testing';
import { RequestXproductsService } from './request-xproducts.service';

describe('RequestXproductsService', () => {
  let service: RequestXproductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestXproductsService],
    }).compile();

    service = module.get<RequestXproductsService>(RequestXproductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
