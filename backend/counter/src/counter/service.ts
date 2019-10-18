import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { CharacterDB } from './types';
import charactersCfg from '../../config/characters';

@Injectable()
export class CounterService {
  constructor(
    @Inject(charactersCfg.model_provider)
    private readonly characterModel: Model<CharacterDB>,
  ) {}

  async getTotal(nameStartsWith: string) {
    try {
      return await this.characterModel.
        find({ name: {$regex : '^' + nameStartsWith, $options: '<i>'}}).
        countDocuments().
        exec();

    } catch (err) {
      console.log(`[COUNTER SERVICE] ${err}`);
    }
  }
}
