import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleAuthController } from './auth/auth.google.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { FacebookAuthController } from './auth/auth.facebook.controller';
import { GithubAuthController } from './auth/auth.github.controller';

@Module({
  imports: [AuthModule],
  controllers: [
    AppController,
    GoogleAuthController,
    FacebookAuthController,
    GithubAuthController,
  ],
  providers: [AppService, AuthService],
})
export class AppModule {}
