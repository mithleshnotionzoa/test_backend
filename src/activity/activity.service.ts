import * as common from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@common.Injectable()
export class ActivityService {
  create(createActivityDto: CreateActivityDto) {
    return `This action adds a ${createActivityDto}new activity`;
  }

  findAll() {
    return `This action returns all activity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${updateActivityDto} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
