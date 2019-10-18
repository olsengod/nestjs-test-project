import { Document } from 'mongoose';
export interface CharacterDB extends Document {
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
export declare class PaginatedListGQL {
    total: number;
    offset: number;
    limit: number;
    results: [CharacterGQL];
}
