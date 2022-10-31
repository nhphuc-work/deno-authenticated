
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config()

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiVersion = configService.get<string>('API_VERSION')

  app.setGlobalPrefix(apiVersion)

  await app.listen(3000);
}
bootstrap();
