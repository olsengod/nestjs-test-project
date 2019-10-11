import { CharactersService } from './service';
import { GetCharactersDto } from './types';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    getCharacters(nameStartsWith: GetCharactersDto['nameStartsWith'], offset: GetCharactersDto['offset'], limit: GetCharactersDto['limit']): Promise<{
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
