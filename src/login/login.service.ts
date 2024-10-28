import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../token/token.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) private loginRepository: Repository<Login>,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async validateUser(createLoginDto: CreateLoginDto) {
    // Check if the user exists
    const existingUser = await this.loginRepository.findOne({
      where: { email: createLoginDto.email },
    });

    console.log('existing user', existingUser);

    if (!existingUser) {
      // User does not exist, create a new user
      const newUser = this.loginRepository.create(createLoginDto);
      const savedUser = await this.loginRepository.save(newUser);

      const payload = { email: savedUser.email, password: savedUser.password };
      const accessToken = await this.jwtService.signAsync(payload, {
        expiresIn: '5m',
      });

      await this.tokenService.create({
        live_token: accessToken,
        loginEmail: savedUser.email,
      });
      const user_token = await this.tokenService.findOne(savedUser.email);
      return user_token.live_token;
    }

    // User exists, check the password
    if (existingUser.password !== createLoginDto.password) {
      throw new UnauthorizedException('Username or password are incorrect !!');
    }

    // User exists and password is correct
    const userToken = await this.tokenService.findOne(existingUser.email);
    const decoded: any = this.jwtService.decode(userToken.live_token);

    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    console.log('currentUnixTimestamp', currentUnixTimestamp);
    console.log('decoded exp', new Date(decoded.exp * 1000));

    if (decoded.exp < currentUnixTimestamp) {
      const againPayload = {
        email: existingUser.email,
        password: existingUser.password,
      };
      const newAccessToken = await this.jwtService.signAsync(againPayload, {
        expiresIn: '5 m',
      });

      await this.tokenService.update(existingUser.email, {
        live_token: newAccessToken,
      });

      const updatedToken = await this.tokenService.findOne(existingUser.email);
      return updatedToken.live_token;
    } else {
      return userToken.live_token;
    }
  }
  findOne(email: string) {
    return this.loginRepository.findOne({ where: { email: email } });
  }
}
