import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @Inject('SERVICE_PROVIDER') private serviceRepository: typeof Service,
  ) {}
  async create(createServiceDto: CreateServiceDto) {
    return this.serviceRepository.create(createServiceDto);
  }

  async findAll() {
    return await this.serviceRepository.findAll({ where: { isActive: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
