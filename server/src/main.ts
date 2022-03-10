import * as dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/../config/.env.${process.env.NODE_ENV}`,
});
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_SECRET);
  await app.listen(3000);
}
bootstrap();
