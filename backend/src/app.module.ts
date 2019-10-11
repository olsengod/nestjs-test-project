import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/module';
import { CharactersModule } from './characters/module';

@Module({
  imports: [UserModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
