import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import serverCfg from '../config/server';
import { AllExceptionsFilter } from './exceptionFilters/allExceptionsFilter';
import fillDatabase from './helpers/fillDB';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(serverCfg.port);
  console.log(`[SERVER] Listening on ${serverCfg.port} port`);

  await fillDatabase();
}
bootstrap();
