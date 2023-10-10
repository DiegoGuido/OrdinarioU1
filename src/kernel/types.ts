export type Entity<ID extends number | string> = {
    id: ID;
}

export type TPagination = {
    filter: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    totalpages?:number;
    sort?: string;
    total?:number;
    offset?:number;
}

export enum Error {
    NO_DATA_FOUND = 'NoDataFound',
    INTERNAL_SERVER_ERROR = 'InternalServerError',
    UNAUTHORIZED = 'UnAuthorized',
    MISSING_FIELDS = 'MissingFields',
    RECORD_NOT_REGISTERED = 'RecordNotRegisteres',

}

export type Status = Entity<number> & {
    description?:string;
}

export type TJson= {
    [x:string]: any;
}

export type TJsonArray = TJson[];