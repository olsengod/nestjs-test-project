/// <reference types="mongoose" />
export declare const UserProviders: {
    provide: any;
    useFactory: (connection: import("mongoose").Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
    inject: any[];
}[];
