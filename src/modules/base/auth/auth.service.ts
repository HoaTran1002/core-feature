import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GoogleStrategy } from './strategy';
import { LoginGoogleDTO } from './dto/login-google.dto';

@Injectable()
export class AuthService {
  constructor(private googleStrategy: GoogleStrategy) {}
  async googleLogin(body: LoginGoogleDTO) {
    const result = await this.googleStrategy.validate(
      body.accessToken,
      body.email,
      (err, user) => {
        if (err) {
          console.log('err:', err);
          throw new UnauthorizedException(err);
        }
        if (user) {
          console.log('user:', user);
        }
        console.log('login with google success');
      },
    );
    console.log(result);
    return result;
  }
}
