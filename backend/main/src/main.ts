import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import serverCfg from '../config/server';
import { AllExceptionsFilter } from './exceptionFilters/allExceptionsFilter';
import rabbitmqCfg from '../config/rabitmq';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${rabbitmqCfg.host}:${rabbitmqCfg.port}`],
      queue: 'counter_queue',
      queueOptions: { durable: false },
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(serverCfg.port);
  console.log(`[SERVER] Listening on ${serverCfg.port} port`);
}
bootstrap();
