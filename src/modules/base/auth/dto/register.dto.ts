import { IsEmail, IsString } from 'class-validator';

export class Register {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  userName: string;

  @IsString()
  password: string;
}
