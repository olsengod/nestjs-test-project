import { Args, Query, Resolver } from '@nestjs/graphql';

import { CharactersService } from './service';
import { CharacterGQL, GetCharactersArgs } from './types';

@Resolver(of => CharacterGQL)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(returns => [CharacterGQL])
  async getCharacters(
    @Args() getCharactersArgs: GetCharactersArgs,
  ) {
    return await this.charactersService.getCharacters(getCharactersArgs);
  }
}
