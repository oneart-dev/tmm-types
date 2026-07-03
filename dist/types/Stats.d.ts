import { ControllersApiErrorResponse, ControllersHotCoinsResponse, ControllersServerStatsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Stats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    serverList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersServerStatsResponse, string | ControllersApiErrorResponse>>;
    topCoinsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersHotCoinsResponse, string | ControllersApiErrorResponse>>;
}
//# sourceMappingURL=Stats.d.ts.map