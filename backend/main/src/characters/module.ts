import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';

import { CharactersResolver } from './resolver';
import { CharactersService } from './service';
import { CharactersProviders } from './providers';
import { DatabaseModule } from '../database/module';
import { COUNTER_SERVICE } from '../../config/counter';

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      { name: COUNTER_SERVICE, transport: Transport.RMQ },
    ]),
  ],
  providers: [
    CharactersService,
    CharactersResolver,
    ...CharactersProviders,
  ],
})
export class CharactersModule {}
