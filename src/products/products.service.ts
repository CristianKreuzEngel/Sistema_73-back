import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY') private productRepository: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: number) {
    return await this.productRepository.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product: Product = await this.productRepository.findByPk(id);
    if (!product) {
      throw new NotFoundException('Produto nao encontrado');
    }
    return await this.productRepository.update(updateProductDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const product: Product = await this.productRepository.findByPk(id);
    if (!product) {
      throw new NotFoundException('Produto nao encontrado');
    }
    return await this.productRepository.update(
      { isActive: false },
      { where: { id } },
    );
  }
}
