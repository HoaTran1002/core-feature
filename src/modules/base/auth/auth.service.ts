import { Injectable } from '@nestjs/common';
// import { GoogleStrategy } from './strategy';
// import { LoginGoogleDTO } from './dto/login-google.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateOAuthLogin() {
    // let user = await this.usersService.findByEmail(userData.email);

    // if (!user) {
    //   user = await this.usersService.createUser(userData);
    // }

    // const payload = { email: 'mew@gmail.com', sub: '1' };
    return {
      success: true,
    };
  }
}
