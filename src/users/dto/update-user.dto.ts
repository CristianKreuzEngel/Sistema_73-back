import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  fullname: string;
  login: string;
  password: string;
  email: string;
  active: boolean;
  idRole: number;
  firstLogin: boolean;
  foto: string;
}
