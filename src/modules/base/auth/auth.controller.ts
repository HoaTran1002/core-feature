import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req: Request) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('apple/redirect')
  @UseGuards(AuthGuard('apple'))
  async appleAuthRedirect(@Req() req: Request) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('linkedin/redirect')
  @UseGuards(AuthGuard('linkedin'))
  async linkedinAuthRedirect(@Req() req: Request) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('twitter/redirect')
  @UseGuards(AuthGuard('twitter'))
  async twitterAuthRedirect(@Req() req: Request) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
}
