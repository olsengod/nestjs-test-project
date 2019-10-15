import { Module } from '@nestjs/common';
import { CharactersResolver } from './resolver';
import { CharactersService } from './service';
import { CharactersProviders } from './providers';
import { DatabaseModule } from '../database/module';

@Module({
  imports: [DatabaseModule],
  providers: [
    CharactersService,
    CharactersResolver,
    ...CharactersProviders,
  ],
})
export class CharactersModule {}
