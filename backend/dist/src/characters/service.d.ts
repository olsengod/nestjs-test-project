import { OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';
import { Character } from './types';
export declare class CharactersService implements OnApplicationBootstrap {
    private readonly characterModel;
    constructor(characterModel: Model<Character>);
    onApplicationBootstrap(): Promise<void>;
    getCharacters(nameStartsWith: string, offset: number, limit: number): Promise<{
        total: number;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
