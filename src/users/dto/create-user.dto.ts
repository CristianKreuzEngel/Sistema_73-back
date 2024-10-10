export class CreateUserDto {
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
