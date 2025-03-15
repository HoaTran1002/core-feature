import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
config();

export interface IProfileGoogleStrategy {
  emails: Array<any>;
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { email } = profile;
    const user = {
      email,
      accessToken,
      // firstName: name.givenName,
      // lastName: name.familyName,
      // picture: photos[0].value,
    };
    done(null, user);
  }
}
