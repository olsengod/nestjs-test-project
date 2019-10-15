import { CharactersService } from './service';
import { CharacterGQL, GetCharactersArgs } from './types';
export declare class CharactersResolver {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    getCharacters(getCharactersArgs: GetCharactersArgs): Promise<CharacterGQL[] | {
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
