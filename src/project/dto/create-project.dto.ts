import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  project_name: string;

  @IsString()
  project_description: string;

  @IsString()
  script_type: string;

  @IsNumber()
  loginId: number;

  @IsString()
  token: string;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  hostruleId: number;
}
