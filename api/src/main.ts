import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: process.env.APP_URL });
  app.use(cookieParser());
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
