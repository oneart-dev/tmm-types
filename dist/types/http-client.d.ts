export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    secure?: boolean;
    path: string;
    type?: ContentType;
    query?: QueryParamsType;
    format?: ResponseFormat;
    body?: unknown;
    baseUrl?: string;
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
export {};
//# sourceMappingURL=http-client.d.ts.map