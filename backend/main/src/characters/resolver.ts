import { Args, Query, Resolver, ResolveProperty } from '@nestjs/graphql';

import { CharactersService } from './service';
import { CharacterGQL, PaginatedListGQL } from './types';
import { GetPaginatedListArgs } from './dto';

@Resolver(() => CharacterGQL)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => PaginatedListGQL)
  @ResolveProperty('results', () => [CharacterGQL])
  async getPaginatedList(
    @Args() getPaginatedListArgs: GetPaginatedListArgs,
  ) {
    return await this.charactersService.getCharacters(getPaginatedListArgs);
  }
}
