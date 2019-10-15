import * as mongoose from 'mongoose';
export interface CharacterDB extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    resourceURI: string;
}
export declare class CharacterGQL {
    id: string;
    name: string;
    description?: string;
    resourceURI?: string;
}
export declare class GetCharactersArgs {
    readonly nameStartsWith: string;
    readonly offset: number;
    readonly limit: number;
}
