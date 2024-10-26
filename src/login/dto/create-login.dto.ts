import {
  IsEmail,
  IsNotEmpty,
  IsString,
  //   MaxLength,
} from 'class-validator';

export class CreateLoginDto {
  //   @IsString()
  //   @IsNotEmpty()
  //   @MaxLength(20)
  //   name: string;
  @IsNotEmpty({ message: 'email should not be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString()
  password: string;
}
//
