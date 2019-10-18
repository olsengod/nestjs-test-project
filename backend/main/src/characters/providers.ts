import { CharacterModel } from './model';
import mongodbCfg from '../../config/database';
import charactersCfg from '../../config/characters';

export const CharactersProviders = [
  {
    provide: charactersCfg.model_provider,
    useFactory: CharacterModel,
    inject: [ mongodbCfg.db_provider ],
  },
];
