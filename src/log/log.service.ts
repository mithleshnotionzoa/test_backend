import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
// import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';
import { ProjectService } from '../project/project.service';

@Injectable()
export class LogService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(
    @InjectRepository(Log) private logRepository: Repository<Log>,
    private projectService: ProjectService,
  ) {}
  async create(createLogDto: CreateLogDto) {
    const project_token = createLogDto.project_token;
    const projectDetail = await this.projectService.findOne(project_token);
    // console.log('projectDetail', projectDetail.loginId);
    createLogDto.loginId = projectDetail.loginId;
    const log = this.logRepository.create(createLogDto);
    return this.logRepository.save(log);
  }

  async findAll(id: any) {
    const allLog = await this.logRepository.find({ where: { loginId: id } });
    console.log('all log in log service', allLog);
    return allLog;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} log`;
  // }

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // update(id: number, updateLogDto: UpdateLogDto) {
  //   return `This action updates a #${id} log`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} log`;
  // }
}
