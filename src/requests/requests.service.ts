import { Inject, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @Inject('REQUEST_PROVIDER') private requestRepository: typeof Request,
  ) {}
  async create(createRequestDto: CreateRequestDto) {
    return await this.requestRepository.create(createRequestDto);
  }

  async findAll() {
    return await this.requestRepository.findAll({ where: { isActive: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return await this.requestRepository.update(updateRequestDto, {
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.requestRepository.update(
      { isActive: false },
      { where: { id: id } },
    );
  }
}
