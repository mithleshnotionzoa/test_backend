import { Module } from '@nestjs/common';
import { ProjectHostRuleService } from './projecthostrule.service';
import { ProjectHostRuleController } from './projecthostrule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectHostRule } from './entities/projecthostrule.entity';

@Module({
  controllers: [ProjectHostRuleController],
  providers: [ProjectHostRuleService],
  imports: [TypeOrmModule.forFeature([ProjectHostRule])],
})
export class ProjectHostRuleModule {}
