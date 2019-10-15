import { OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';
import { CharacterDB, CharacterGQL, GetCharactersArgs } from './types';
export declare class CharactersService implements OnApplicationBootstrap {
    private readonly characterModel;
    constructor(characterModel: Model<CharacterDB>);
    onApplicationBootstrap(): Promise<void>;
    getCharacters({ nameStartsWith, offset, limit }: GetCharactersArgs): Promise<CharacterGQL[] | {
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
