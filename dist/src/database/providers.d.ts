import * as mongoose from 'mongoose';
declare function setDBConnection(): Promise<typeof mongoose | void>;
export declare const databaseProviders: {
    provide: string;
    useFactory: typeof setDBConnection;
}[];
export {};
