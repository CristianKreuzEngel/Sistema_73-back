import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies['access_token'];
    console.log(req);
    console.log(req.cookies);
    if (!token) {
      console.error('Token not found');
      console.log(token);
      throw new UnauthorizedException('Token não fornecido');
    }
    try {
      req['user'] = jwt.verify(token, process.env.SECRET);
      next();
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}
