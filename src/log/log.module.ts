import { forwardRef, Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { ProjectModule } from '../project/project.module';
import { JwtModule } from '@nestjs/jwt';
import { constant } from '../login/constant';
// import { JwtStrategy } from '../auth-strategies/jwt-stragies.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth-strategies/jwt-stragies.guard';
import { LogGuard } from './log.guard';
// import { LogGuard } from './log.guard';

@Module({
  controllers: [LogController],
  providers: [LogService, JwtStrategy, LogGuard],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Log]),
    forwardRef(() => ProjectModule),
    JwtModule.register({
      secret: constant.SECRET_KEY,
      signOptions: {
        expiresIn: '2m',
      },
    }),
  ],
  exports: [LogService],
})
export class LogModule {}
