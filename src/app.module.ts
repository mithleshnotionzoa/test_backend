import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { CategoryModule } from './category/category.module';
import { ProjectHostRuleModule } from './projecthostrule/projecthostrule.module';
import { LogModule } from './log/log.module';
import { ActivityModule } from './activity/activity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSource } from './ormconfig';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(appDataSource),
    LoginModule,
    ProjectModule,
    CategoryModule,
    ProjectHostRuleModule,
    LogModule,
    ActivityModule,
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
