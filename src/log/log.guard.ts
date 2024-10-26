import {
  ExecutionContext,
  Injectable,
  //   HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
// import { Observable } from 'rxjs';
import { constant } from '../login/constant';
// import { ProjectService } from 'src/project/project.service';
// import { LogService } from './log.service';
@Injectable()
export class LogGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const bearerToken = request.headers['authorization'];
    const token = bearerToken.split(' ')[1];
    console.log('token in log guard', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verify(token, {
        secret: constant.SECRET_KEY,
      });
      //   const allLog = await this.logService.findAll(payload.id);
      //   console.log('all LOG', allLog);
      console.log('PAYLOAD', payload);
      request['loginId'] = payload.id;
      return true;
    } catch (error) {
      throw new UnauthorizedException('invalid token', error);
    }
  }
}
