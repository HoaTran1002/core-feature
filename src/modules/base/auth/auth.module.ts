import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RepositoriesModule } from 'src/repositories/repository.module';
import { Repositories } from 'src/repositories/repository';

@Module({
  imports: [RepositoriesModule],
  controllers: [AuthController],
  providers: [AuthService, Repositories],
  exports: [AuthService],
})
export class AuthModule {}
