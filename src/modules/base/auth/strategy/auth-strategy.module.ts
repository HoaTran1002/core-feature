import { Module } from '@nestjs/common';
import { AppleStrategy } from './apple.strategy';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { LinkedinStrategy } from './linkedin.strategy';

@Module({
  providers: [
    AppleStrategy,
    GoogleStrategy,
    FacebookStrategy,
    LinkedinStrategy,
  ],
  exports: [AppleStrategy, GoogleStrategy, FacebookStrategy, LinkedinStrategy],
})
export class AuthStrategyModule {}
