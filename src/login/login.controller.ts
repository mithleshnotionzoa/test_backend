import {
  Controller,
  Get,
  Post,
  Body,
  // UseInterceptors,
  UsePipes,
  ValidationPipe,
  // ValidationPipe,
  // Patch,
  // Param,
  // Delete,
  // UseGuards,
  // Param,
  // Req,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { EmailValidation } from './emalValidation';
// import { EmailValidation } from './emalValidation';
// import { LoginInterceptor } from './loginInterceptor';
// import { JwtStrategy } from '../jwt-auth.guard';
// import { AuthGuard } from '@nestjs/passport';
// import { authGuard } from './jwt-auth.guard';
// import { UpdateLoginDto } from './dto/update-login.dto';
// import { CustomTokenGuard } from './jwt-auth.guard';

@Controller('/logsystem')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  // @UseGuards(authGuard)
  @Post('/login')
  @UsePipes(new ValidationPipe())
  @UsePipes(EmailValidation)
  createLogin(@Body() createLoginDto: CreateLoginDto) {
    console.log('createLoginDto', createLoginDto);
    return this.loginService.validateUser(createLoginDto);
  }

  // @UseGuards(CustomTokenGuard)
  @Get('/data')
  findAll() {
    return ' I am getting data';
  }

  // @Get(':id')
  // findOne(@Param('email') email: string) {
  //   return this.loginService.findOne(email);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginService.update(+id, updateLoginDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginService.remove(+id);
  // }
}
