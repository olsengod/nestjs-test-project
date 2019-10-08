import * as mongoose from 'mongoose';
export interface User extends mongoose.Document {
    id: string;
    name: string;
    age: number;
}
export declare const UserModel: mongoose.Model<mongoose.Document, {}>;
