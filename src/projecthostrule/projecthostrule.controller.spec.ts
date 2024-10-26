import { Test, TestingModule } from '@nestjs/testing';
import { ProjectHostRuleController } from './projecthostrule.controller';
import { ProjectHostRuleService } from './projecthostrule.service';

describe('ProjecthostruleController', () => {
  let controller: ProjectHostRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectHostRuleController],
      providers: [ProjectHostRuleService],
    }).compile();

    controller = module.get<ProjectHostRuleController>(
      ProjectHostRuleController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
