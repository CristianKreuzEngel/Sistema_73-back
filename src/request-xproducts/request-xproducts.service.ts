import { Injectable } from '@nestjs/common';
import { CreateRequestXproductDto } from './dto/create-request-xproduct.dto';
import { UpdateRequestXproductDto } from './dto/update-request-xproduct.dto';

@Injectable()
export class RequestXproductsService {
  create(createRequestXproductDto: CreateRequestXproductDto) {
    return 'This action adds a new requestXproduct';
  }

  findAll() {
    return `This action returns all requestXproducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestXproduct`;
  }

  update(id: number, updateRequestXproductDto: UpdateRequestXproductDto) {
    return `This action updates a #${id} requestXproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestXproduct`;
  }
}
