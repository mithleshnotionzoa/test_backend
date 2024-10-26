import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
