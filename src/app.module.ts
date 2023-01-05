import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BrandController } from './brand/brand.controller';
import { BrandModule } from './brand/brand.module';
import { ConfigModule } from '@nestjs/config';
import { KnexModules } from './db/knex.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KnexModules,
    UserModule,
    AuthModule,
    BrandModule,
  ],
  controllers: [AppController, UserController, AuthController, BrandController],
  providers: [AppService, UserService],
})
export class AppModule {}
