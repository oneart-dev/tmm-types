import { ControllersApiErrorResponse, ControllersApiSuccessServicesChartCandleSources, ControllersApiSuccessServicesChartCandles, ControllersUnauthorizedResponse, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    listList: (query: {
        exchange_id: number;
        symbol: number;
        tf?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
        interval?: string;
        from?: number;
        to?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any[][], string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    chartList: (query: {
        exchange_id: number;
        symbol: string;
        interval: "1s" | "5s" | "15s" | "1m" | "5m" | "15m" | "30m";
        to?: number;
        limit?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesChartCandles, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    sourcesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesChartCandleSources, string>>;
}
//# sourceMappingURL=Candles.d.ts.map