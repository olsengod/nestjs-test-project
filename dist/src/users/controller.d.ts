import { UserService } from './service';
import { CreateUserDto, UpdateUserDto } from './types';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser({ name, age }: CreateUserDto): Promise<{
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
    updateUser(userId: string, { name, age }: UpdateUserDto): Promise<{
        id: string;
        name: string;
        age: number;
    }>;
    deleteUser(userId: string): Promise<any>;
}
