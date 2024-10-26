import { IsString } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  live_token: string;

  @IsString()
  loginEmail: string;
}
