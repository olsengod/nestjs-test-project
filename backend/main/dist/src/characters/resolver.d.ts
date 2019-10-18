import { CharactersService } from './service';
import { GetPaginatedListArgs } from './dto';
export declare class CharactersResolver {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    getPaginatedList(getPaginatedListArgs: GetPaginatedListArgs): Promise<{
        total: import("rxjs").Observable<number>;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
