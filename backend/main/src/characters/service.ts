import { Injectable, Inject, OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';

import { CharacterDB } from './types';
import { GetPaginatedListArgs } from './dto';
import charactersCfg from '../../config/characters';
import initDatabase from '../helpers/initDB';

@Injectable()
export class CharactersService implements OnApplicationBootstrap {
  constructor(
    @Inject(charactersCfg.model_provider)
    private readonly characterModel: Model<CharacterDB>,
    @Inject('COUNTER_SERVICE') private readonly client: ClientProxy,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    await initDatabase(this.characterModel);
    await this.client.connect();
  }

  async getCharacters({ nameStartsWith, offset, limit }: GetPaginatedListArgs) {
    try {
      let results = [];
      const total = this.client.send<number>({ cmd: 'getTotal' }, nameStartsWith);
      // const total = await this.characterModel.
      //   find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
      //   countDocuments().
      //   exec();
      console.log('total', total);
      // if (total === 0) {
      //   return {
      //     total,
      //     offset,
      //     limit,
      //     results,
      //   };
      // }

      results = await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        skip(offset).
        limit(limit).
        exec();

      return {
        total,
        offset,
        limit,
        results,
      };

    } catch (err) {
      console.log(`[CHARACTERS SERVICE] ${err}`);
    }
  }
}
