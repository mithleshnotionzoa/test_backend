import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { constant } from './constant';
import { JwtModule } from '@nestjs/jwt';
// import { TokenService } from '../token/token.service';
import { TokenModule } from '../token/token.module';
// import { ProjectService } from '../project/project.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    TypeOrmModule.forFeature([Login]),
    JwtModule.register({
      secret: constant.SECRET_KEY,
      signOptions: { expiresIn: '5m' },
    }),
    TokenModule,
  ],
  exports: [LoginService],
})
export class LoginModule {}
