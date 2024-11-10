import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestXproductDto } from './create-request-xproduct.dto';

export class UpdateRequestXproductDto extends PartialType(CreateRequestXproductDto) {}
