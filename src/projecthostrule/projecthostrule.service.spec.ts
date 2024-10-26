import { Test, TestingModule } from '@nestjs/testing';
import { ProjectHostRuleService } from './projecthostrule.service';

describe('ProjecthostruleService', () => {
  let service: ProjectHostRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectHostRuleService],
    }).compile();

    service = module.get<ProjectHostRuleService>(ProjectHostRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
