import { CharactersService } from './service';
import { GetCharactersDto } from './types';
export declare class CharactersResolver {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    getCharacters(getCharactersDto: GetCharactersDto): Promise<{
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
