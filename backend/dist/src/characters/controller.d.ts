import { CharactersService } from './service';
import { GetCharactersDto } from './types';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    getCharacters({ nameStartsWith, offset, limit }: GetCharactersDto): Promise<{
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
