import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @Inject('SERVICE_PROVIDER') private serviceRepository: typeof Service,
  ) {}
  async create(createServiceDto: CreateServiceDto) {
    console.log('createServiceDto', createServiceDto);
    return this.serviceRepository.create(createServiceDto);
  }

  async findAll() {
    return await this.serviceRepository.findAll({ where: { isActive: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service: Service = await this.serviceRepository.findByPk(id);
    if (!service) {
      throw new NotFoundException('Service não encontrado');
    }
    return this.serviceRepository.update(updateServiceDto, { where: { id } });
  }

  async remove(id: number) {
    const service: Service = await this.serviceRepository.findByPk(id);
    if (!service) {
      throw new NotFoundException('Service não encontrado');
    }
    return await this.serviceRepository.update(
      { isActive: false },
      { where: { id } },
    );
  }
}
