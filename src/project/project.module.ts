import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Login } from '../login/entities/login.entity';
import { Category } from '../category/entities/category.entity';
import { ProjectHostRule } from '../projecthostrule/entities/projecthostrule.entity';
import { Log } from '../log/entities/log.entity';
// import { LogModule } from '../log/log.module';
import { JwtStrategy } from '../auth-strategies/jwt-stragies.guard';
import { JwtModule } from '@nestjs/jwt';
import { constant } from '../login/constant';
// import { JwtAuthGuard } from '../login/jwtauth.guard';
import { PassportModule } from '@nestjs/passport';
import { ProjectGuard } from './project.guard';
import { LoginModule } from '../login/login.module';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, JwtStrategy, ProjectGuard],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Project, Login, Category, ProjectHostRule, Log]),
    JwtModule.register({
      secret: constant.SECRET_KEY,
    }),
    LoginModule,
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
