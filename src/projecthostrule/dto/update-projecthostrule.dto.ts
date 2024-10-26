import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectHostRuleDto } from './create-projecthostrule.dto';

export class UpdateProjecthostruleDto extends PartialType(
  CreateProjectHostRuleDto,
) {}
