import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateLogDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  @IsArray()
  payload: string;

  @IsString()
  device_info: string;

  @IsString()
  ip_address: string;

  @IsString()
  current_url: string;

  @IsNumber()
  projectId: number;

  @IsString()
  project_token: string;

  @IsString()
  endpoint: string;

  @IsNumber()
  loginId: number;
}
