import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { constant } from '../login/constant';
import { ProjectService } from '../project/project.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private projectService: ProjectService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: constant.SECRET_KEY,
    });
  }
  validate(payload: any) {
    console.log('payload in jwtstrategy', payload);
    return payload;
  }
}
