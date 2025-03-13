import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/base/auth/auth.module';
import { DatabaseModule } from './modules/base/database/database.module';

@Module({
  imports: [DatabaseModule, AuthModule],
})
class CoreModule {}

@Module({})
class ProductModule {}
@Module({
  imports: [CoreModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
