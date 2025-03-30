import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RepositoriesModule } from 'src/repositories/repository.module';
import { Repositories } from 'src/repositories/repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthStrategyModule } from './strategy/auth-strategy.module';

@Module({
  imports: [
    RepositoriesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AuthStrategyModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, Repositories],
  exports: [AuthService],
})
export class AuthModule {}
