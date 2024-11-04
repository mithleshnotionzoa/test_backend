import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { ProjectService } from './project.service';
import { constant } from '../login/constant';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from '../login/login.service';

@Injectable()
export class ProjectGuard extends AuthGuard('jwt') {
  constructor(
    private jwtService: JwtService,
    private loginService: LoginService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log("request",request)
    // const bearerToken = request.headers['authorization'];
    // console.log("bearer token",bearerToken)

   

    // const token = bearerToken.split(' ')[1];
    const token= request.body.token
    console.log('token in project service', token);
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: constant.SECRET_KEY,
      });
      // console.log('payload in project service', payload);

      // Fetch login details asynchronously
      const loginDetail = await this.loginService.findOne(payload.email);
      // console.log('loginDetail in project service', loginDetail);
      if (!loginDetail) {
        console.log("unauthorized")
        return false;
      }

      // Attach the login details to the request object for use in your route handlers
      console.log('reuquest body', request.body);
      const projectToken = await this.jwtService.signAsync(payload);
      // console.log('projectToken', projectToken);

      request['user'] = loginDetail;
      const loginId = loginDetail.id;
      const projectDetail = {
        ...request.body,
        loginId: loginId,
        token: projectToken,
      };
      // console.log('project detail', projectDetail);
      // await this.projectService.create(projectDetail);
      request.body = projectDetail;
      return true;
    } catch (error) {
      console.log('error in project guard', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
