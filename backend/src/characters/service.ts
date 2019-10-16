import { Injectable, Inject, OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';

import { CharacterDB } from './types';
import { GetPaginatedListArgs } from './dto';
import charactersCfg from '../../config/characters';
import initDatabase from '../helpers/initDB';

@Injectable()
export class CharactersService implements OnApplicationBootstrap {
  constructor(
    @Inject(charactersCfg.model_provider)
    private readonly characterModel: Model<CharacterDB>,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    await initDatabase(this.characterModel);
  }

  async getCharacters({ nameStartsWith, offset, limit }: GetPaginatedListArgs) {
    try {
      let characters = [];
      const total = await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        countDocuments().
        exec();

      if (total === 0) {
        return {
          total,
          offset,
          limit,
          characters,
        };
      }

      characters = await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        skip(offset).
        limit(limit).
        exec();

      return {
        total,
        offset,
        limit,
        characters,
      };

    } catch (err) {
      console.log(`[CHARACTERS SERVICE] ${err}`);
    }
  }
}
