import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { constant } from './constant';
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('inside jwt authguard');
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return false; // No token or not a Bearer token
    }

    const token = authorizationHeader.split(' ')[1];
    console.log('token jwt auth guard', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: constant.SECRET_KEY,
      });
      console.log(`"payload inside auth guard"`, payload);
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return super.canActivate(context);
  }
}
