import { Module } from '@nestjs/common';
import { FacebookStrategy } from 'src/facebook/facebook.strategy';
import { GithubStrategy } from 'src/github/github.strategy';
import { GoogleStrategy } from 'src/google/google.strategy';
import { FacebookAuthController } from './auth.facebook.controller';
import { GithubAuthController } from './auth.github.controller';
import { GoogleAuthController } from './auth.google.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [
    GoogleAuthController,
    FacebookAuthController,
    GithubAuthController,
  ],
  exports: [],
  imports: [],
  providers: [AuthService, GoogleStrategy, FacebookStrategy, GithubStrategy],
})
export class AuthModule {}
