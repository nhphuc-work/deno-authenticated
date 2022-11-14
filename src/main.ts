
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiVersion = configService.get<string>('API_VERSION')
  const port = configService.get<number>('PORT')

  app.setGlobalPrefix(apiVersion)

  await app.listen(port);
}

bootstrap();
