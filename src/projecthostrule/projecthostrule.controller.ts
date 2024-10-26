import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectHostRuleService } from './projecthostrule.service';
import { CreateProjectHostRuleDto } from './dto/create-projecthostrule.dto';
import { UpdateProjecthostruleDto } from './dto/update-projecthostrule.dto';

@Controller('projecthostrule')
export class ProjectHostRuleController {
  constructor(
    private readonly projectHostRuleService: ProjectHostRuleService,
  ) {}

  @Post()
  create(@Body() createProjectHostRuleDto: CreateProjectHostRuleDto) {
    return this.projectHostRuleService.create(createProjectHostRuleDto);
  }

  @Get()
  findAll() {
    return this.projectHostRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectHostRuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectHostRuleDto: UpdateProjecthostruleDto,
  ) {
    return this.projectHostRuleService.update(+id, updateProjectHostRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectHostRuleService.remove(+id);
  }
}
