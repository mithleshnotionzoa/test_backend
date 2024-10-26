import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
// import { UpdateLogDto } from './dto/update-log.dto';
import { LogGuard } from './log.guard';
import { Request } from 'express';

@Controller('/logproject')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post('/log')
  create(@Body() createLogDto: CreateLogDto) {
    return this.logService.create(createLogDto);
  }

  @Get('/viewAllLog')
  @UseGuards(LogGuard)
  findAll(@Req() req: Request) {
    const loginId = req['loginId'];
    console.log('loginId in log controller', loginId);
    return this.logService.findAll(loginId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.logService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
  //   return this.logService.update(+id, updateLogDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.logService.remove(+id);
  // }
}
