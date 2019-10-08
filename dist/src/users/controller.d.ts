import { UserService } from './service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(name: string, age: number): Promise<{
        newUserId: string;
    }>;
    getAllUsers(): Promise<{
        id: string;
        name: string;
        age: number;
    }[]>;
    getUser(userId: string): Promise<{
        id: string;
        name: string;
        age: number;
    }>;
    updateUser(userId: string, name: string, age: number): Promise<{
        id: string;
        name: string;
        age: number;
    }>;
    deleteUser(userId: string): Promise<any>;
}
