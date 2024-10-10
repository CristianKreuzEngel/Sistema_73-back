import { Inject, Injectable} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Product} from "./entities/product.entity";

@Injectable()
export class ProductsService {

  constructor(@Inject('PRODUCTS_REPOSITORY') private productRepository: typeof Product) {
  }

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
