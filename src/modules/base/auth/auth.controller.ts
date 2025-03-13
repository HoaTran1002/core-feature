import { Body, Controller, Post } from '@nestjs/common';
import { Register } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post()
  register(@Body() body: Register) {
    console.log(body);
  }

  @Post('login-google')
  loginWithGoogle() {}

  @Post('login-facebook')
  loginWithFacebook() {}

  @Post('login-apple')
  loginWithApple() {}
}
