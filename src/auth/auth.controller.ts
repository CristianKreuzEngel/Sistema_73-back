import {
  Controller,
  Post,
  Body,
  Res,
  UnauthorizedException,
  Req,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: CreateAuthDto, @Res() res: Response) {
    return await this.authService.login(loginDto, res);
  }

  @Get('check-token')
  checkToken(@Req() req) {
    const token = req.cookies['access_token'];
    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }
    try {
      jwt.verify(token, process.env.SECRET);
      return { valid: true };
    } catch (error: any) {
      console.error(error);
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('access_token');
    return res.status(200).json({ message: 'Logout realizado com sucesso' });
  }
}
