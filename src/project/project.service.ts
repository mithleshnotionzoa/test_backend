import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
// import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Login } from '../login/entities/login.entity';
// import { Log } from '../log/entities/log.entity';
import { JwtService } from '@nestjs/jwt';
// import { userInfo } from 'os';

@Injectable()
export class ProjectService {
  // Declare grabbedEmail as a class property
  private grabbedEmail: string = '';

  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    @InjectRepository(Login) private loginRepository: Repository<Login>,
    // @InjectRepository(Log) private logRepository: Repository<Log>,
    private jwtService: JwtService,
  ) {}
  // Method to create a project
  async create(createProjectDto: CreateProjectDto) {
    //('grabbed email', this.grabbedEmail);
    // console.log('project detail in project service', createProjectDto);
    const projectDetail = this.projectRepository.create(createProjectDto);
    const savedProjectDetail = await this.projectRepository.save(projectDetail);
    const projects = await this.projectRepository.find({
      where: { loginId: savedProjectDetail.loginId },
    });
    return projects;
  }

  // {
  //   "project_name":"kv3",
  //   "project_description":"i am kv",
  //   "script_type":"i am kv"
  // }
  // findForLog(savedProject: any) {
  //   // ('savedProject', savedProject);
  //   const projectId = savedProject?.id;
  //   const logDto = {
  //     name: 'project1',
  //     category: 'sdsd',
  //     description: 'i am project 1',
  //     payload: 'kndksn',
  //     device_info: 'iPhone 16',
  //     ip_address: '333.111.333.222',
  //     current_url: 'www.http://example.com',
  //     projectId: projectId,
  //   };
  //   this.logService.create(logDto);
  // }
  // Uncomment and implement these methods if needed
  // findAll(): Promise<Project[]> {
  //   return this.projectRepository.find();
  // }

  findOne(token: any) {
    return this.projectRepository.findOne({ where: { token: token } });
  }

  // update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
  //   return this.projectRepository.save({ id, ...updateProjectDto });
  // }

  // remove(id: number): Promise<void> {
  //   return this.projectRepository.delete(id).then(() => {});
  // }
}
