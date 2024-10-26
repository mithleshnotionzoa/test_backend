import {
  Controller,
  // Get,
  Post,
  Body,
  UseGuards,
  Req,

  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
// import { JwtGuard } from '../login/jwt-auth.guard';
import { ProjectGuard } from './project.guard';
// import { CustomTokenGuard } from '../login/jwt-auth.guard';
// import { UpdateProjectDto } from './dto/update-project.dto';
import { Request } from 'express';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/post')
  @UseGuards(ProjectGuard)
  create(@Body() createProjectDto: CreateProjectDto, @Req() req: Request) {
    const user = req.user;
    console.log('user in project controller', user);
    return this.projectService.create(createProjectDto);
  }
}
