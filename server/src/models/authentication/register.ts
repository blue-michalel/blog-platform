import { IsEmail, IsStrongPassword } from 'class-validator';

export class UserCreate {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
