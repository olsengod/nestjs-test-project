import * as mongoose from 'mongoose';
export interface User extends mongoose.Document {
    id: string;
    name: string;
    age: number;
}
export declare class FindById {
    id: string;
}
export declare class CreateUserDto {
    readonly name: string;
    readonly age: number;
}
export declare class UpdateUserDto {
    readonly name: string;
    readonly age: number;
}
