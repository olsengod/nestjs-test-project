/// <reference types="mongoose" />
export declare const CharactersProviders: {
    provide: any;
    useFactory: (connection: import("mongoose").Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
    inject: any[];
}[];
