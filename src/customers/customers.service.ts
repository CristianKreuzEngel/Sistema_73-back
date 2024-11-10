import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('CUSTOMER_PROVIDER') private customerRepository: typeof Customer,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerRepository.create(createCustomerDto);
  }

  async findAll() {
    return this.customerRepository.findAll({ where: { isActive: true } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(updateCustomerDto, {
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.customerRepository.update(
      { isActive: false },
      { where: { id } },
    );
  }
}
