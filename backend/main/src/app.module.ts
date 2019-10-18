import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { UserModule } from './user/module';
import { CharactersModule } from './characters/module';

@Module({
  imports: [
    // UserModule,
    CharactersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
