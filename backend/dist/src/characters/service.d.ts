import { OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';
import { CharacterDB } from './types';
import { GetPaginatedListArgs } from './dto';
export declare class CharactersService implements OnApplicationBootstrap {
    private readonly characterModel;
    constructor(characterModel: Model<CharacterDB>);
    onApplicationBootstrap(): Promise<void>;
    getCharacters({ nameStartsWith, offset, limit }: GetPaginatedListArgs): Promise<{
        total: number;
        offset: number;
        limit: number;
        characters: any[];
    }>;
}
