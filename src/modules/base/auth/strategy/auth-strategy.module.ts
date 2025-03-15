import { Module } from '@nestjs/common';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { AppleStrategy } from './apple.strategy';
import { LinkedinStrategy } from './linkedin.strategy';

@Module({
  providers: [
    GoogleStrategy,
    FacebookStrategy,
    AppleStrategy,
    LinkedinStrategy,
  ],
  exports: [GoogleStrategy, FacebookStrategy, AppleStrategy, LinkedinStrategy],
})
export class AuthStrategyModule {}
