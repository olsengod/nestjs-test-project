import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

import rabbitmqCfg from '../config/rabitmq';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${rabbitmqCfg.host}:${rabbitmqCfg.port}`],
      queue: 'counter_queue',
      queueOptions: { durable: false },
    },
  });
  await app.listen(() => console.log('Counter-microservice is listening'));
}
bootstrap();
