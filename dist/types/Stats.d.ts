import { ControllersApiErrorResponse, ControllersHotCoinsResponse, ControllersLongShortRatioResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Stats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    longShortRatioList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLongShortRatioResponse, string | ControllersApiErrorResponse>>;
    topCoinsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersHotCoinsResponse, string | ControllersApiErrorResponse>>;
}
//# sourceMappingURL=Stats.d.ts.map