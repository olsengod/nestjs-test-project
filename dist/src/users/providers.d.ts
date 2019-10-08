/// <reference types="mongoose" />
export declare const UserProviders: {
    provide: string;
    useFactory: (connection: import("mongoose").Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
    inject: string[];
}[];
