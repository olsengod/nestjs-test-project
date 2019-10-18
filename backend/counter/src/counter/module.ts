import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices';

import { COUNTER_SERVICE } from '../../config/constants';
import { CounterController } from './controller';
import { CounterService } from './service';
import { CounterProviders } from './providers';
import { DatabaseModule } from '../database/module';

@Module({
  imports: [
    DatabaseModule,
    // ClientsModule.register([{ name: COUNTER_SERVICE, transport: Transport.RMQ }]),
  ],
  controllers: [CounterController],
  providers: [
    CounterService,
    ...CounterProviders,
  ],
})
export class CounterModule {}
