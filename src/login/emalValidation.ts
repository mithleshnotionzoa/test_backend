import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

interface User {
  id: number; // Corrected to a number type
  email: string; // Changed to a string type
  password: string; // Changed to a string type
}

@Injectable()
export class EmailValidation implements PipeTransform {
  transform(value: User) {
    const { email } = value; // Destructure the email from value

    // Check if the email is empty
    if (!email || email.trim() === '') {
      throw new BadRequestException('Email should not be empty');
    }

    // Check if the email ends with '@gmail.com' or '@yahoo.com'
    const isValidEmail =
      email.endsWith('@gmail.com') || email.endsWith('@yahoo.com');

    if (!isValidEmail) {
      throw new BadRequestException(`  'Invalid email format'      `);
    }

    // Return the value if all checks pass
    return value; // Return the validated user object
  }
}
