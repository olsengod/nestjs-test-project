import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from './service';
import { UserProviders } from './providers';
import { DatabaseModule } from '../database/module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    ...UserProviders,
  ],
})
export class UserModule {}
