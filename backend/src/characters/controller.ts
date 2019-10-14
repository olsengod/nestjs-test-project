import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { CharactersService } from './service';
import { GetCharactersDto } from './types';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async getCharacters(
    @Query() { nameStartsWith, offset, limit }: GetCharactersDto,
  ) {
    return await this.charactersService.getCharacters(nameStartsWith, offset, limit);
  }
}
