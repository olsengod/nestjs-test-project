import * as mongoose from 'mongoose';
declare function setDBConnection(): Promise<typeof mongoose | void>;
export declare const databaseProviders: {
    provide: any;
    useFactory: typeof setDBConnection;
}[];
export {};
