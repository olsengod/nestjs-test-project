import { OnApplicationBootstrap } from '@nestjs/common';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { CharacterDB } from './types';
import { GetPaginatedListArgs } from './dto';
export declare class CharactersService implements OnApplicationBootstrap {
    private readonly characterModel;
    private readonly client;
    constructor(characterModel: Model<CharacterDB>, client: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getCharacters({ nameStartsWith, offset, limit }: GetPaginatedListArgs): Promise<{
        total: import("rxjs").Observable<number>;
        offset: number;
        limit: number;
        results: any[];
    }>;
}
