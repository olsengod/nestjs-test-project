import { UserModel } from './model';

export const UserProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: UserModel,
    inject: ['DATABASE_CONNECTION'],
  },
];
