import * as mongoose from 'mongoose';
export interface Character extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    resourceURI: string;
}
export declare class GetCharactersDto {
    readonly nameStartsWith: string;
    readonly offset: number;
    readonly limit: number;
}
