import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';

import { CharactersService } from './service';
import { GetCharactersDto } from './types';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async getCharacters(
    @Query() getCharactersDto: GetCharactersDto,
  ) {
    return await this.charactersService.getCharacters(getCharactersDto);
  }
}
