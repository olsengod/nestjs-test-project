import { Model } from 'mongoose';
import { User } from './types';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<{
        id: string;
        name: string;
        age: number;
    }[]>;
    getUser(id: string): Promise<{
        id: string;
        name: string;
        age: number;
    }>;
    findUser(id: string): Promise<User>;
    createUser(name: string, age: number): Promise<string>;
    updateUser(id: string, name: string, age: number): Promise<{
        id: string;
        name: string;
        age: number;
    }>;
    deleteUser(id: string): Promise<void>;
}
