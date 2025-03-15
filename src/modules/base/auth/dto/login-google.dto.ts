import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginGoogleDTO {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
