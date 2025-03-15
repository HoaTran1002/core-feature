import { Controller, Get, UseGuards, Body } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginGoogleDTO } from './dto/login-google.dto';
@Controller('auth-google')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @Get('redirect')
  // @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Body() body: LoginGoogleDTO) {
    return await this.authServices.googleLogin(body);
  }
}
