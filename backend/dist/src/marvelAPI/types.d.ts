interface GetCharactersResponse {
    code: number | string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: Data;
    etag: string;
    message: string;
}
export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}
export interface Result {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Comics;
    series: Comics;
}
interface Stories {
    available: number;
    returned: number;
    collectionURI: string;
    items: Item2[];
}
interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}
interface Comics {
    available: number;
    returned: number;
    collectionURI: string;
    items: Item[];
}
interface Item {
    resourceURI: string;
    name: string;
}
interface Thumbnail {
    path: string;
    extension: string;
}
interface Url {
    type: string;
    url: string;
}
interface ResponseResult {
    name: string;
    description: string;
    resourceURI: string;
}
export declare type ResponseType = Partial<GetCharactersResponse>;
export declare type ResponseResultType = ResponseResult[];
export {};
