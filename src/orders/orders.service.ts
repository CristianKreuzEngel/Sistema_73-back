import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_REPOSITORY') private orderRepository: typeof Order,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    console.log(createOrderDto);
    return await this.orderRepository.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepository.findAll({ where: { isActive: true } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findByPk(id);
    if (!order) {
      throw new NotFoundException('Ordem não encontrada!');
    }
    return await this.orderRepository.update(updateOrderDto, { where: { id } });
  }

  async remove(id: number) {
    const order = await this.orderRepository.findByPk(id);
    if (!order) {
      throw new NotFoundException('Ordem não encontrada!');
    }
    return await this.orderRepository.update(
      { isActive: false },
      { where: { id } },
    );
  }
}
