import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestXproductsService } from './request-xproducts.service';
import { CreateRequestXproductDto } from './dto/create-request-xproduct.dto';
import { UpdateRequestXproductDto } from './dto/update-request-xproduct.dto';

@Controller('request-xproducts')
export class RequestXproductsController {
  constructor(private readonly requestXproductsService: RequestXproductsService) {}

  @Post()
  create(@Body() createRequestXproductDto: CreateRequestXproductDto) {
    return this.requestXproductsService.create(createRequestXproductDto);
  }

  @Get()
  findAll() {
    return this.requestXproductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestXproductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestXproductDto: UpdateRequestXproductDto) {
    return this.requestXproductsService.update(+id, updateRequestXproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestXproductsService.remove(+id);
  }
}
