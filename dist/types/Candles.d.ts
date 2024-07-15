import { ControllersApiErrorResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    listList: (query: {
        exchange_id: number;
        symbol: number;
        tf?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
        interval?: string;
        from?: number;
        to?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object[][], string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Candles.d.ts.map