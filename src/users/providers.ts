import { UserModel } from './model';
import mongodbCfg from '../../config/database';
import userCfg from '../../config/user';

export const UserProviders = [
  {
    provide: userCfg.model_provider,
    useFactory: UserModel,
    inject: [ mongodbCfg.db_provider ],
  },
];
