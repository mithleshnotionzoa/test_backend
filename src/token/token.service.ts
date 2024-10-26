import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token) private tokenRepository: Repository<Token>,
  ) {}
  async create(createTokenDto: CreateTokenDto) {
    const token = this.tokenRepository.create(createTokenDto);
    console.log('token table', token);
    await this.tokenRepository.save(token);
  }

  findAll() {
    return this.tokenRepository.find();
  }
  findOne(loginEmail: string) {
    return this.tokenRepository.findOne({
      where: {
        loginEmail: loginEmail, // or simply `loginEmail` for shorthand
      },
    });
  }

  update(loginEmail: any, updateTokenDto: UpdateTokenDto) {
    return this.tokenRepository.update(
      { loginEmail: loginEmail },
      updateTokenDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
