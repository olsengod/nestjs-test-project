import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import serverCfg from '../config/server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverCfg.port);
  console.log(`[SERVER] Listening on ${serverCfg.port} port`);
}
bootstrap();
