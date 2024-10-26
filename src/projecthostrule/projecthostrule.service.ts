import { Injectable } from '@nestjs/common';
import { CreateProjectHostRuleDto } from './dto/create-projecthostrule.dto';
import { UpdateProjecthostruleDto } from './dto/update-projecthostrule.dto';

@Injectable()
export class ProjectHostRuleService {
  create(createProjectHostRuleDto: CreateProjectHostRuleDto) {
    return `This action adds a new ${createProjectHostRuleDto} projectHostRule`;
  }

  findAll() {
    return `This action returns all projectHostRule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectHostRule`;
  }

  update(id: number, updateProjectHostRuleDto: UpdateProjecthostruleDto) {
    return `This action updates a #${updateProjectHostRuleDto} projectHostRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectHostRule`;
  }
}
