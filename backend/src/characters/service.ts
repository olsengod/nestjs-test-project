import { Injectable, Inject, OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';

import { Character } from './types';
import charactersCfg from '../../config/characters';
import initDatabase from '../helpers/initDB';

@Injectable()
export class CharactersService implements OnApplicationBootstrap {
  constructor(
    @Inject(charactersCfg.model_provider)
    private readonly characterModel: Model<Character>,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    await initDatabase(this.characterModel);
  }

  async getCharacters(nameStartsWith: string, offset: number, limit: number) {
    try {
      let results = [];
      const total = await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        countDocuments().
        exec();

      if (total === 0) {
        return {
          total,
          offset,
          limit,
          results,
        };
      }

      const characters = await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        skip(offset).
        limit(limit).
        exec();

      results = characters.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
      }));

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
